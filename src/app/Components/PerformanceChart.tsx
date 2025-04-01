// components/PerformanceChart.js
'use client';

import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { 
  ssr: false,
  loading: () => <div className="h-[350px] flex items-center justify-center">Loading chart...</div>
});

export default function PerformanceChart({ metric, data }) {
  if (!data?.histogram) return null;

  // Prepare chart data
  const categories = data.histogram.map(bin => 
    bin.end ? `${bin.start}-${bin.end}` : `>${bin.start}`
  );
  
  const seriesData = data.histogram.map(bin => bin.density * 100);

  const chartOptions = {
    chart: {
      type: 'bar' as const,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: '60%',
      }
    },
    colors: ['#10b981', '#f59e0b', '#ef4444'], // green, amber, red
    xaxis: {
      categories: categories,
      labels: { style: { fontSize: '12px' } }
    },
    yaxis: {
      title: { text: 'Percentage of Users' },
      labels: { formatter: (val) => `${val.toFixed(1)}%` },
      max: 100
    },
    tooltip: {
      y: { formatter: (val) => `${val.toFixed(1)}%` }
    },
    annotations: {
      yaxis: [{
        y: parseFloat(data.percentiles.p75) * 100,
        borderColor: '#3b82f6',
        label: {
          text: `75th Percentile (${data.percentiles.p75})`,
          style: { 
            color: '#fff', 
            background: '#3b82f6',
            fontSize: '12px'
          }
        }
      }]
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow h-full">
      <h3 className="text-lg font-medium mb-2 text-center">
        {metric.split('_').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')}
      </h3>
      <ApexChart
        options={chartOptions}
        series={[{ data: seriesData }]}
        type="bar"
        height={350}
        width="100%"
      />
    </div>
  );
}