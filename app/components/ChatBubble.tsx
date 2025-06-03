import { Message } from 'ai';
import { forwardRef } from 'react';

const ChatBubble = forwardRef<HTMLDivElement, { message: Message }>(
  ({ message }, ref) => {
    const { content, role } = message;

    return (
      <div
        ref={ref}
        className={`flex p-4 text-xs sm:text-lg transition-all duration-300 ease-in-out 
           min-w-3/4 break-words ${
             role === 'user'
               ? 'bg-red-400 text-white ml-auto rounded-s-xl rounded-se-xl'
               : 'bg-slate-200 text-gray-700 rounded-e-xl rounded-es-xl'
           }`}>
        {content}
      </div>
    );
  }
);

ChatBubble.displayName = 'ChatBubble';

export default ChatBubble;
