import React from 'react'
import ReactPlayer from 'react-player'

const Home = () => {
  return (
     <div>
        <h2>React Player Demo</h2>

        <div className="player_Container">
           <ReactPlayer url="https://www.youtube.com/watch?v=7sDY4m8KNLc" />
        </div>
     </div>
  );
}

export default Home