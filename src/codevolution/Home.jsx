import React from 'react';
import ReactPlayer from 'react-player';

import styles from './Home.module.css';

const Home = () => {
   return (
      <div>
         <h2>React Player Demo</h2>

         <div className={styles.player_Container}>
            <ReactPlayer
               width="100%"
               height="100%"
               controls
               url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
               onReady={() => console.log('onReady callback')}
               onStart={() => console.log('onStart callback')}
               onPause={() => console.log('onPause callback')}
               onEnded={() => console.log('onEnded callback')}
               onError={() => console.log('onError callback')}
            />
         </div>
      </div>
   );
};

export default Home;
