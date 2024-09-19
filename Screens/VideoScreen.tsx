import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const VideoScreen = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require('../assets/React-Native.mp4')}
        // useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        onError={(error) => console.error('Video Error:', error)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 320,
    height: 180,
  },
  buttons: {
    marginTop: 10,
  },
});

export default VideoScreen;