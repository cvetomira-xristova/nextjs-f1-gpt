import React from 'react';
import chatIcon from '../assets/chat-icon.svg';
import Image from 'next/image';

interface ChatInputProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ChatInput = ({
  input,
  handleInputChange,
  handleSubmit,
}: ChatInputProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-8">
      <div className="flex gap-2">
        <input
          value={input}
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none cursor-text"
          type="text"
          placeholder="Ask an F1 question..."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-3 text-white bg-stone-900 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors hover:cursor-pointer">
          <Image
            src={chatIcon}
            alt="Chat Icon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
