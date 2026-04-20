import React from 'react';
import { Coffee, Droplets, Info } from 'lucide-react';
import './WaitTimeCard.css';

const WaitTimeCard = ({ facility }) => {
  const { name, type, waitTime, status } = facility;

  const Icon = type === 'food' ? Coffee : type === 'washroom' ? Droplets : Info;

  return (
    <div className={`wait-card glass-panel status-${status}`}>
      <div className="card-icon-wrapper">
        <Icon size={24} className="card-icon" />
      </div>
      
      <div className="card-content">
        <h3 className="facility-name">{name}</h3>
        <div className="wait-info">
          <span className="wait-time">{waitTime}</span>
          <span className="wait-unit">min wait</span>
        </div>
      </div>
      
      <div className="status-indicator">
        <span className="status-dot"></span>
        <span className="status-text">
          {status === 'good' ? 'Fast' : status === 'medium' ? 'Busy' : 'Crowded'}
        </span>
      </div>
    </div>
  );
};

export default WaitTimeCard;
