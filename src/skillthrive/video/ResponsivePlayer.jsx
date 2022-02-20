import React from 'react'
import ReactPlayer from 'react-player';

import styles from './ResponsivePlayer.module.css';

const ResponsivePlayer = ({ onProgress}) => {
  return (
     <div className="main">
        <h2>Responsive Player Component</h2>
        <div className={styles.playerWrapper}>
           <ReactPlayer
              className={styles.reactPlayer}
              controls
              url="https://www.youtube.com/watch?v=WcWdWFNtVto"
              width="100%"
              height="100%"
              onProgress={onProgress}
           />
        </div>
     </div>
  );
}

export default ResponsivePlayer
// 4.10