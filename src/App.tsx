import React from 'react';
import './App.css';
import Filter from './components/Filter/index.tsx';
import TicketList from './components/TicketList/index.tsx';

const App: React.FC = () => {
  return (
    <div className="app-container">
        <TicketList />
    </div>
  );
};

export default App;
