import React, { useState } from 'react'
import ResponsivePlayer from '../video/ResponsivePlayer';

import styles from './Lesson.module.css';

const Lesson = () => {
   const [watchComplete, setWatchComplete] = useState(false);

   const handleWatchComplete = (state) => {
      
      const playedPercentage = (state.played * 100).toFixed(2)

      if (state.played >= 0.7 && !watchComplete) {
         setWatchComplete(true);
      }
      
      setTimeout(() => {
         console.log('Played Percentage: ', `${playedPercentage}%`);
      }, 1000)
      
   }

  return (
     <div>
        <ResponsivePlayer
           url="https://www.youtube.com/watch?v=Rq5SEhs9lws"
           onProgress={handleWatchComplete}
        />

        
        <div
           className={`${styles.marker} ${
              watchComplete
                 ? styles.marker_is_complete
                 : styles.marker_not_complete
           }`}>
           Completed
        </div>
     </div>
  );
}

export default Lesson