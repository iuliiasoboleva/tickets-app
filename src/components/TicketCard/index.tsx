import React from 'react';
import './styles.css';

interface TicketCardProps {
  origin_name: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
  currency: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  origin_name,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  carrier,
  stops,
  price,
  currency,
}) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{carrier}</h3>
      </div>
      <div className="ticket-info">
        <p>
          <strong>{origin_name}</strong> → <strong>{destination_name}</strong>
        </p>
        <p>
          {departure_date} {departure_time} - {arrival_date} {arrival_time}
        </p>
        <p>{stops} пересадок</p>
      </div>
      <div className="ticket-price">
        <button>Купить за {price} {currency}</button>
      </div>
    </div>
  );
};

export default TicketCard;
