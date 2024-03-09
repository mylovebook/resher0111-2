// Import necessary libraries or modules
const axios = require('axios');

// Function to fetch real-time cryptocurrency market data
async function fetchMarketData() {
    try {
        const response = await axios.get('https://api.cryptowatch.com/markets/summaries');
        const marketData = response.data.result;
        return marketData;
    } catch (error) {
        console.error('Error fetching market data:', error);
        return null;
    }
}

// Main function to orchestrate fetching and displaying data
async function main() {
    console.log('CryptoWatch - Real-time Cryptocurrency Market Observatory\nFetching market data...\n');

    // Fetch market data
    const marketData = await fetchMarketData();
    if (marketData) {
        console.log('Market Data:');
        console.log(marketData);
    }
}

// Invoke the main function to start fetching and displaying data
main();
