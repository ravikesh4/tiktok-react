import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Components/Video';
import db from './firebase';

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className="app">
      <div className="app__videos">

        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
        {/* <Video
        url="http://techslides.com/demos/sample-videos/small.webm"
        channel="ravikesh"
        description="this is description"
        song="looser song"
        likes={200}
        messages={120}
        shares={100}
        /> */}
        {/* <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video /> */}
      </div>
    </div>
  );
}

export default App;
