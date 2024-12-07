import React, { useState } from 'react';
import ticketsData from '../../tickets.json';
import TicketCard from '../TicketCard/index.tsx';
import Filter from '../Filter/index.tsx';
import './styles.css';

interface Ticket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

const TicketList: React.FC = () => {
  const [currency, setCurrency] = useState('RUB');
  const [rate, setRate] = useState(1); // Текущий курс валюты
  const [filteredStops, setFilteredStops] = useState<number[]>([]);
  const tickets: Ticket[] = ticketsData.tickets;

  const handleCurrencyChange = (newCurrency: string, newRate: number) => {
    setCurrency(newCurrency);
    setRate(newRate);
  };

  const handleStopsChange = (stops: number[]) => {
    setFilteredStops(stops);
  };

  const filteredTickets = tickets.filter((ticket) =>
    filteredStops.length === 0 || filteredStops.includes(ticket.stops)
  );

  return (
    <div className="ticket-list-container">
      <Filter
        onCurrencyChange={handleCurrencyChange}
        onStopsChange={handleStopsChange}
      />
      <div className="ticket-list">
        {filteredTickets.map((ticket, index) => (
          <TicketCard key={index} {...ticket} price={Math.round(ticket.price * rate)} currency={currency} />
        ))}
      </div>
    </div>
  );
};

export default TicketList;
