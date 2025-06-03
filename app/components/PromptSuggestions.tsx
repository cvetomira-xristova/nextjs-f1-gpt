import React from 'react';
import PromptSuggestionButton from './PromptSuggestionButton';

const PromptSuggestions = ({
  onPromptClick,
}: {
  onPromptClick: (prompt: string) => void;
}) => {
  const prompts = [
    'Who won the Formula 1 in 2024?',
    'Who is the highest paid Formula 1 driver?',
    'What is the most successful Formula 1 team?',
    'What is the max pit speed limit?',
    'What is the fastest lap in Formula 1 history?',
    'What is the shortest Formula 1 track?',
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-4 justify-center">
      {prompts.map((prompt: string, index: number) => (
        <div
          key={index}
          className={`${index > 2 ? 'hidden sm:block' : ''}`}>
          <PromptSuggestionButton
            onClick={() => onPromptClick(prompt)}
            text={prompt}
          />
        </div>
      ))}
    </div>
  );
};

export default PromptSuggestions;
