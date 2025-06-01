import React from 'react';
import PromptSuggestionButton from './PromptSuggestionButton';

const PromptSuggestions = ({ onPromptClick }) => {
  const prompts = [
    'Who won the Formula 1 in 2024?',
    'What is the fastest lap in Formula 1 history?',
    'What are the top teams in Formula 1?',
    'Who is the highes paid Formula 1 driver?',
    'Who are the top drivers in Formula 1?',
    'What is the history of Formula 1?',
    'What is the role of a pit crew in Formula 1?',
    'How do Formula 1 cars differ from regular cars?',
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-4 justify-center">
      {prompts.map((prompt, index) => (
        <div
          key={index}
          className={`${index > 2 ? 'hidden md:block' : ''}`}>
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
