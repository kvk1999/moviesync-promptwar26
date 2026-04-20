import React from 'react';
import { MonitorPlay } from 'lucide-react';
import './MovieSchedule.css';

const MovieSchedule = ({ movies }) => {
  return (
    <section className="schedule-section">
      <div className="section-header">
        <h2 className="section-title">Today's Schedule</h2>
      </div>

      <div className="schedule-list glass-panel">
        {movies.map((movie, index) => (
          <div key={movie.id} className="movie-item" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
            <div className="movie-time">
              {movie.time}
            </div>
            
            <div className="movie-details">
              <h3 className="movie-title">{movie.title}</h3>
              <div className="screen-info">
                <MonitorPlay size={14} />
                <span>{movie.screen}</span>
              </div>
            </div>
            
            <div className={`movie-status status-badge-${movie.status.replace(/\s+/g, '-').toLowerCase()}`}>
              {movie.status}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieSchedule;
