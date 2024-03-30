import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Button, FlatList, StyleSheet, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import micro from '../../../../../assets/image/micro.png';

const MicroScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const retrieveMessages = async () => {
      try {
        const storedMessages = await AsyncStorage.getItem('messages');
        if (storedMessages) {
          setMessages(JSON.parse(storedMessages));
        }
      } catch (error) {
        console.error('Error retrieving messages:', error);
      }
    };
    retrieveMessages();
  }, []);

  const sendMessage = async () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage === '') {
      alert('Vui lòng nhập tin nhắn');
      return;
    }

    if (trimmedMessage.length > 255) {
      alert('Tin nhắn không được dài quá 255 ký tự');
      return;
    }

    const newMessage = {
      id: messages.length.toString(), // Change from message.length to messages.length
      text: trimmedMessage,
      timestamp: Date.now(),
    };

    setMessages([newMessage, ...messages]); // Change from message to messages
    setMessage('');

    try {
      await AsyncStorage.setItem('messages', JSON.stringify([newMessage, ...messages])); // Change from message to messages
    } catch (error) {
      console.error('Error storing message:', error);
    }
  };

  const clearMessages = async () => {
    try {
      setMessages([]);
      await AsyncStorage.removeItem('messages');
    } catch (error) {
      console.error('Error clearing messages:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestamp}>{new Date(item.timestamp).toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        inverted
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.inputContainer}>
        <Image source={micro} style={styles.micro} />
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={text => setMessage(text)}
          placeholder="Nhập tin nhắn..."
          onSubmitEditing={sendMessage}
          autoFocus={true}
        />
        <Button title="Gửi" onPress={sendMessage} />
      </View>
      <TouchableOpacity onPress={clearMessages}>
        <Text style={styles.clearButton}>Xóa tin nhắn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 100,
  },
  messageContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: '70%',
    alignSelf: 'flex-start',
  },
  micro: { width: 30, height: 30 },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 5,
    marginLeft: 10,
    backgroundColor: '#fff',
  },
  clearButton: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default MicroScreen;
