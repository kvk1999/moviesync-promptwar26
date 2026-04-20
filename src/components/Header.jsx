import React from 'react';
import { Film, Clock } from 'lucide-react';
import './Header.css';

const Header = ({ currentTime }) => {
  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = currentTime.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });

  return (
    <header className="app-header glass-panel">
      <div className="header-brand">
        <div className="logo-icon">
          <Film size={28} color="var(--accent-neon)" />
        </div>
        <h1 className="brand-name">Movie<span className="brand-highlight">Sync</span></h1>
      </div>
      
      <div className="header-time">
        <div className="time-display">
          <Clock size={20} className="time-icon" />
          <span className="current-time">{timeString}</span>
        </div>
        <span className="current-date">{dateString}</span>
      </div>
    </header>
  );
};

export default Header;
