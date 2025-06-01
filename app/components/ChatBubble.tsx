import React from 'react';

const ChatBubble = ({ message }) => {
  const { content, role } = message;

  return (
    <div
      className={`rounded-lg p-4 l my-2 text-xs md:text-lg ${
        role === 'user'
          ? 'bg-red-400 text-white ml-auto'
          : 'bg-slate-200 text-gray-700'
      }`}>
      {content}
    </div>
  );
};

export default ChatBubble;
