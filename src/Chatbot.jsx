import React, { useState } from 'react';
import vector_icon from './assets/Images/Vector.svg'
import './App.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! How can I assist you today?', time: '14:00 - 24 Aug 2024' },
    { id: 2, sender: 'user', text: 'I need help with my account.', time: '14:00 - 24 Aug 2024' },
    { id: 3, sender: 'bot', text: 'I need help with my account.', time: '14:01 - 24 Aug 2024' },
    { id: 4, sender: 'user', text: 'I need help with my account.', time: '14:02 - 24 Aug,2024' },
    { id: 5, sender: 'bot', text: 'I need help with my account.', time: '14:03 - 24 Aug 2024' },
    { id: 6, sender: 'user', text: 'I need help with my account.', time: '14:05 - 24 Aug 2024' },
    { id: 7, sender: 'bot', text: 'I need help with my account.', time: '14:06 - 24 Aug 2024' },
    { id: 8, sender: 'user', text: 'I need help with my account.', time: '14:08 - 24 Aug 2024' },
    { id: 9, sender: 'bot', text: 'I need help with my account.', time: '14:09 - 24 Aug 2024' },
    { id: 10, sender: 'user', text: 'I need help with my account.', time: '14:10 - 24 Aug 2024' },
    { id: 11, sender: 'user', text: 'I need help with my account.', time: '14:10 - 24 Aug 2024' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [chatName, setChatName] = React.useState('Nikhil')

  const handleSendMessage = () => {
    const formatDate = () => {
      const now = new Date();
      
      // Get time in HH:MM format
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12 :false });
      
      // Get date in DD Mon, YYYY format
      const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
      const date = now.toLocaleDateString('en-GB', dateOptions).replace(',', '');
  
      return `${time} - ${date}`;
    };

    if (newMessage.trim() !== '') {
      const userMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: newMessage,
        time: formatDate(),
      };
      setMessages([...messages, userMessage]);
  
      // Simulate bot reply after user message
      setTimeout(() => {
        const botReply = {
          id: messages.length + 2,
          sender: 'bot',
          text: 'I see. Please provide more details about the issue.',
          time: formatDate(),
        };
        setMessages((prevMessages) => [...prevMessages, botReply]);
      }, 1000);
  
      setNewMessage('');
    }
  };

  return (
    <>
      <div className="chat-body overflow-auto flex flex-col  custom-scrollbar min-h-[400px] h-[450px] ">
        {messages.map((message) => (
              <React.Fragment key={message.id}>
              <div
              className={`mb-2 p-3 rounded-[16px] max-w-xs ${
                message.sender === 'bot'
                ? 'bg-[#F6F7F7] self-start'
                : 'bg-[#D8EDF0] text-black float-end'
              }`}
              style={{
                alignSelf: message.sender === 'bot' ? 'flex-start' : 'flex-end',
              }}>
              <p className="text-sm">{message.text}</p>
              </div>
              <span
              className={`mb-2 text-xs text-zinc-600 ${
                message.sender === 'bot' ? 'self-start' : 'float-end'
              }`}
              style={{
                alignSelf: message.sender === 'bot' ? 'flex-start' : 'flex-end',
              }}
            >
              {message.time}
            </span>
          </React.Fragment>
          
        ))}
           <div className="chat-ended flex justify-between items-center text-zinc-500 text-sm w-full">
  <div className="flex-grow border-t border-gray-300 mr-2"></div>
  <span>Chat with {chatName} Ended</span>
  <div className="flex-grow border-t border-gray-300 ml-2"></div>
</div>
      </div>

      <div className="chat-footer w-full flex pt-4 relative pb-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Message"
          className="sticky w-full bottom-0 p-2 border rounded-lg border-[#0FA4B5]  focus:outline-[#0FA4B5] "
        />
        <button onClick={handleSendMessage}>
          <img src={vector_icon} alt="" className=" absolute right-2 top-7 cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default ChatBot;
