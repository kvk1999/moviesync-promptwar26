import { useState, useEffect } from 'react';

const initialFacilities = [
  { id: 1, name: 'Main Food Court', type: 'food', waitTime: 15, status: 'medium' },
  { id: 2, name: 'Snack Bar (Level 2)', type: 'food', waitTime: 5, status: 'good' },
  { id: 3, name: 'Washroom (Level 1 - Men)', type: 'washroom', waitTime: 2, status: 'good' },
  { id: 4, name: 'Washroom (Level 1 - Women)', type: 'washroom', waitTime: 8, status: 'medium' },
  { id: 5, name: 'Washroom (Level 2)', type: 'washroom', waitTime: 1, status: 'good' },
  { id: 6, name: 'Box Office / Ticketing', type: 'service', waitTime: 20, status: 'high' }
];

const initialMovies = [
  { id: 101, title: 'Dune: Part Two', time: '17:30', screen: 'IMAX 1', status: 'Starting Soon' },
  { id: 102, title: 'Kung Fu Panda 4', time: '17:45', screen: 'Screen 3', status: 'Boarding' },
  { id: 103, title: 'Godzilla x Kong', time: '18:15', screen: 'Screen 5', status: 'Upcoming' },
  { id: 104, title: 'Ghostbusters: Frozen Empire', time: '18:40', screen: 'Screen 2', status: 'Upcoming' }
];

export const useDynamicData = () => {
  const [facilities, setFacilities] = useState(initialFacilities);
  const [movies, setMovies] = useState(initialMovies);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate dynamic wait times changing
  useEffect(() => {
    const waitTimer = setInterval(() => {
      setFacilities(current => 
        current.map(facility => {
          // Randomly fluctuate wait time by -2 to +2 minutes
          const change = Math.floor(Math.random() * 5) - 2;
          let newWait = Math.max(0, facility.waitTime + change);
          
          // Determine status based on wait time
          let status = 'good';
          if (newWait > 15) status = 'high';
          else if (newWait > 5) status = 'medium';

          return { ...facility, waitTime: newWait, status };
        })
      );
    }, 5000); // Update every 5 seconds for demonstration purposes

    return () => clearInterval(waitTimer);
  }, []);

  // Update movie statuses dynamically (simulated)
  useEffect(() => {
    const movieTimer = setInterval(() => {
        setMovies(current => 
            current.map(movie => {
                // In a real app, this would compare movie.time with currentTime
                // Here we just shuffle 'Boarding' and 'Starting Soon' for demo
                const statuses = ['Upcoming', 'Boarding', 'Starting Soon', 'Now Showing'];
                // Let's just keep the initial ones mostly static but maybe toggle Boarding
                if (movie.status === 'Boarding') return {...movie, status: 'Starting Soon'};
                if (movie.status === 'Starting Soon') return {...movie, status: 'Now Showing'};
                if (movie.status === 'Now Showing') return {...movie, status: 'Boarding'};
                return movie;
            })
        );
    }, 30000); // 30 seconds

    return () => clearInterval(movieTimer);
  }, []);

  return { facilities, movies, currentTime };
};
