import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { requestRecordPermission, AudioRecorderPlayer } from 'react-native-audio-recorder-player';

class MicroScreen extends Component {
  state = {
    isRecording: false,
    audioRecorderPlayer: null,
    chatMessages: [],
  };

  componentDidMount() {
    (async () => {
      try {
        await requestRecordPermission();
        this.setState({ audioRecorderPlayer: new AudioRecorderPlayer() });
      } catch (error) {
        console.error('Failed to request record permission', error);
      }
    })();
  }

  onStartRecord = async () => {
    try {
      const result = await this.state.audioRecorderPlayer.startRecorder();
      console.log(result);
      this.setState({ isRecording: true });
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  };

  onStopRecord = async () => {
    try {
      const result = await this.state.audioRecorderPlayer.stopRecorder();
      console.log(result);
      this.setState({ isRecording: false });

      // Thêm chat message
      const chatMessage = {
        content: 'Audio recording', // Thay đổi nội dung tùy ý
        attachment: result.audioFile,
      };
      this.setState((prevState) => ({
        chatMessages: [...prevState.chatMessages, chatMessage],
      }));
    } catch (error) {
      console.error('Failed to stop recording', error);
    }
  };

  render() {
    const { isRecording, chatMessages } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MicroScreen</Text>
        <TouchableOpacity onPress={isRecording ? this.onStopRecord : this.onStartRecord}>
          <Text>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
        </TouchableOpacity>

        {chatMessages.map((chatMessage) => (
          <View key={chatMessage.id} style={{ margin: 10 }}>
            <Text>{chatMessage.content}</Text>
            <AudioPlayer
              src={chatMessage.attachment.uri}
              controls={true}
            />
          </View>
        ))}
      </View>
    );
  }
}

export default MicroScreen;
