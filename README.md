# Documentation

## App Overview

This application helps you analyze website performance using Google's Chrome UX Report (CrUX) data.

## Technology Stack

The app is built using **Next.js 15** for performance optimization and is deployed on **Vercel**.


## How to Use

### 1. Search Page

- Enter any website URL to view its performance metrics.
- The **Search Page** is a **Server Component**, with a client-side controlled component for the URL input.
- Once the user enters a URL, the Next.js router pushes the user to the Results Page with the URL as a search parameter.

### 2. Results Page

- The **Results Page** is a **Server Component**.
- It fetches performance data from the Chrome UX Report (CrUX) API upon the page load.
- While the data is being fetched, a loading skeleton is displayed as a placeholder using Next.js streaming.
- Once the API response is received, the results are dynamically populated on the page using Next.js streaming.
- If there is an error, it is handled gracefully with an **ErrorComponent**.
- The performance data is displayed in both **Chart** and **Table** formats.

## Streaming Feature

The results page uses **Next.js 15**'s streaming capabilities to show a loading skeleton for the chart while fetching data. This enhances the user experience by displaying partial content instantly instead of waiting for the entire response.

## Resources

### GitHub Repository

Check out the source code or contribute to the project:

[View on GitHub](https://github.com/yourusername/your-repo)

### Run the App Locally

To run the app on your local machine, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-repo
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

**Note:** Make sure to use the latest version of **Node.js** for the best performance and compatibility. You can download it from [here](https://nodejs.org/).

## Acknowledgments

Some parts of the project, such as debugging and simple code generation, were assisted by **ChatGPT** and **DeepSeek**. However, these tools were only used for minor optimizations and not for the entire implementation.

