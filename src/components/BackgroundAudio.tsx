import  { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import YouTube from 'react-youtube';
import type { YouTubeProps } from 'react-youtube';

export interface BackgroundMusicHandle {
  unMute: () => void;
}

const BackgroundMusic = forwardRef<BackgroundMusicHandle>((_, ref) => {
  const playerRef = useRef<any>(null);
  const [ready, setReady] = useState(false);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target;
    event.target.playVideo();
    setReady(true);
  };

  const onPlayerEnd: YouTubeProps['onEnd'] = (event) => {
    event.target.playVideo();
  };

  useImperativeHandle(ref, () => ({
    unMute: () => {
      if (playerRef.current && ready) {
        playerRef.current.unMute();
      } else {
        console.warn('Player not ready yet — cannot unMute');
      }
    },
  }));

  return (
    <div style={{ display: 'none' }}>
     <YouTube
  videoId="LmgBqvzMuhM" // ✅ Shorts video ID
  opts={{
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      loop: 1,
      playlist: 'LmgBqvzMuhM', // ✅ Needed for loop to work
      mute: 1, // ✅ Required for autoplay to work without user interaction
    },
  }}
  onReady={onPlayerReady}
  onEnd={onPlayerEnd}
/>

    </div>
  );
});

export default BackgroundMusic;
