// lib/fetchPerformanceData.js
export async function fetchCruxData(url, options = {}) {
    const {
      formFactor = 'ALL',
      metrics = [
        'largest_contentful_paint',
        'first_contentful_paint',
        'cumulative_layout_shift',
        'interaction_to_next_paint',
        'experimental_time_to_first_byte'
      ],
      apiKey = process.env.CRUX_API_KEY
    } = options;
  
    if (!apiKey) {
      return { error: 'API key is required. Set CRUX_API_KEY environment variable or pass apiKey parameter.' };
    }
  
    const apiUrl = `https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          formFactor: formFactor !== 'ALL' ? formFactor : undefined,
          metrics: metrics.length > 0 ? metrics : undefined
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return { 
          error: `CrUX API request failed with status ${response.status}: ${errorData.error?.message || 'Unknown error'}`,
          status: response.status
        };
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching CrUX data:', error);
      return { error: `Failed to fetch CrUX data: ${error.message}` };
    }
  }