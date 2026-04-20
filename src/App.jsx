import React from 'react';
import Header from './components/Header';
import FacilityDashboard from './components/FacilityDashboard';
import MovieSchedule from './components/MovieSchedule';
import { useDynamicData } from './hooks/useDynamicData';
import './App.css';

function App() {
  const { facilities, movies, currentTime } = useDynamicData();

  return (
    <div className="app-container">
      <Header currentTime={currentTime} />
      
      <main className="main-content">
        <div className="dashboard-layout">
          <div className="layout-main">
            <FacilityDashboard facilities={facilities} />
          </div>
          
          <aside className="layout-sidebar">
            <MovieSchedule movies={movies} />
            
            <section className="info-panel glass-panel">
              <h3>Opening Hours</h3>
              <ul className="hours-list">
                <li><span>Venue</span><span>10:00 AM - 11:30 PM</span></li>
                <li><span>Box Office</span><span>10:00 AM - 10:30 PM</span></li>
                <li><span>Food Court</span><span>11:00 AM - 11:00 PM</span></li>
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
