import React from 'react';
import WaitTimeCard from './WaitTimeCard';
import './FacilityDashboard.css';

const FacilityDashboard = ({ facilities }) => {
  return (
    <section className="dashboard-section">
      <div className="section-header">
        <h2 className="section-title">Live Wait Times</h2>
        <div className="live-indicator">
          <span className="live-dot"></span>
          Live Updates
        </div>
      </div>
      
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={facility.id} style={{ animationDelay: `${index * 0.1}s` }}>
            <WaitTimeCard facility={facility} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilityDashboard;
