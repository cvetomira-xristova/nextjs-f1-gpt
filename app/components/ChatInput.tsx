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
      className="sticky bottom-0 sm:backdrop-blur-sm w-full pb-2  max-w-3xl mx-auto">
      <div className="flex gap-2 max-w-3xl mx-auto">
        <input
          value={input}
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-2xl cursor-text focus:outline-none"
          type="text"
          placeholder="Ask an F1 question..."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-3 text-white bg-stone-900 rounded-full hover:bg-red-700">
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
