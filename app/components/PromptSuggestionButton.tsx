import React from 'react';

const PromptSuggestionButton = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return (
    <button
      className="px-4 py-2 text-xs sm:text-lg text-white bg-red-600 rounded-lg 
      hover:bg-red-700 focus:outline-none cursor-pointer"
      onClick={onClick}>
      {text}
    </button>
  );
};

export default PromptSuggestionButton;
