import React, { useState, useEffect } from 'react';
import './styles.css';

interface FilterProps {
  onCurrencyChange: (currency: string, rate: number) => void;
  onStopsChange: (stops: number[]) => void;
}

const Filter: React.FC<FilterProps> = ({ onCurrencyChange, onStopsChange }) => {
  const [currency, setCurrency] = useState('RUB');
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>({
    RUB: 1,
    USD: 0.013,
    EUR: 0.012,
  });

  useEffect(() => {
    // Загрузка курсов валют с API
    fetch('https://api.exchangerate-api.com/v4/latest/RUB')
      .then((response) => response.json())
      .then((data) => {
        const filteredRates = {
          RUB: 1,
          USD: data.rates.USD,
          EUR: data.rates.EUR,
        };
        setExchangeRates(filteredRates);
      })
      .catch((err) => {
        console.error('Ошибка загрузки курсов валют:', err);
      });
  }, []);

  const handleCurrencyChange = (cur: string) => {
    setCurrency(cur);
    const rate = exchangeRates[cur] || 1;
    onCurrencyChange(cur, rate);
  };

  const handleStopChange = (stop: number) => {
    let updatedStops: number[];
    if (selectedStops.includes(stop)) {
      updatedStops = selectedStops.filter((s) => s !== stop);
    } else {
      updatedStops = [...selectedStops, stop];
    }
    setSelectedStops(updatedStops);
    onStopsChange(updatedStops);
  };

  return (
    <div className="filter">
      <div className="filter-group">
        <h3>Валюта</h3>
        <div className="currency-buttons">
          {['RUB', 'USD', 'EUR'].map((cur) => (
            <button
              key={cur}
              className={currency === cur ? 'active' : ''}
              onClick={() => handleCurrencyChange(cur)}
            >
              {cur}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Количество пересадок</h3>
        {[0, 1, 2, 3].map((stop) => (
          <label key={stop}>
            <input
              type="checkbox"
              checked={selectedStops.includes(stop)}
              onChange={() => handleStopChange(stop)}
            />
            {stop === 0 ? 'Без пересадок' : `${stop} пересадка${stop > 1 ? 'и' : ''}`}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
