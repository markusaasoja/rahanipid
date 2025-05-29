'use client'

import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import './Charts.css';

const StockChart = () => {
  const [asmlData, setAsmlData] = useState([]);
  const [unityData, setUnityData] = useState([]);
  const [amznData, setAmznData] = useState([]);

  const fetchStockData = async (symbol, setData, cacheKey, cacheTimestampKey) => {
    const cacheDuration = 60 * 60 * 1000; // 1 hour
    const cachedData = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(cacheTimestampKey);
    const now = Date.now();

    if (cachedData && cachedTimestamp && now - cachedTimestamp < cacheDuration) {
      setData(JSON.parse(cachedData));
      console.log(`Loaded ${symbol} stock data from cache`);
      return;
    }

    try {
      const response = await axios.get('https://www.alphavantage.co/query', {
        params: {
          function: 'TIME_SERIES_DAILY',
          symbol,
          apikey: 'R0AUKVHS3UYCAMCY',
        },
      });

      const timeSeries = response.data['Time Series (Daily)'];
      if (!timeSeries) return;

      const chartData = Object.entries(timeSeries)
        .slice(0, 30)
        .map(([date, values]) => ({
          date,
          close: parseFloat(values['4. close']),
        }))
        .reverse();

      localStorage.setItem(cacheKey, JSON.stringify(chartData));
      localStorage.setItem(cacheTimestampKey, now.toString());

      setData(chartData);
      console.log(`Fetched ${symbol} stock data from API`);
    } catch (error) {
      console.error(`Failed to fetch ${symbol} stock data`, error);
    }
  };

  useEffect(() => {
    fetchStockData('ASML', setAsmlData, 'asml_stock_data', 'asml_stock_data_timestamp');
    fetchStockData('U', setUnityData, 'unity_stock_data', 'unity_stock_data_timestamp');
    fetchStockData('AMZN', setAmznData, 'amzn_stock_data', 'amzn_stock_data_timestamp');

    const interval = setInterval(() => {
      fetchStockData('ASML', setAsmlData, 'asml_stock_data', 'asml_stock_data_timestamp');
      fetchStockData('U', setUnityData, 'unity_stock_data', 'unity_stock_data_timestamp');
      fetchStockData('AMZN', setAmznData, 'amzn_stock_data', 'amzn_stock_data_timestamp');
    }, 60 * 60 * 1000); // Refresh every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='chart-text'>
        <h1 className='article-header'>Tõusvad aktsiad täna</h1>
        <p>Siin on meie hinnangul populaarsed ja tõusvad aktsiad! Pange tähele, et see valik ei määra aktsiate tuleviku suunda</p>
      </div>
      <div className="chart-container">
        <div className="chart-item">
          <h3>ASML (ASML)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={asmlData}>
              <XAxis dataKey="date" hide />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="close" stroke="#00a800" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-item">
          <h3>Unity Software (U)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={unityData}>
              <XAxis dataKey="date" hide />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="close" stroke="#00a800" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-item">
          <h3>Amazon (AMZN)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={amznData}>
              <XAxis dataKey="date" hide />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="close" stroke="#00a800" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default StockChart;
