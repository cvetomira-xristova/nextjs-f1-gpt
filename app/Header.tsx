import Image from 'next/image';
import f1GPTLogo from './assets/f1-gpt-h.png';

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={f1GPTLogo}
        alt="F1GPT Logo"
        className="h-14 sm:h-20 w-auto"
        priority
      />
      <p className="text-sm sm:text-md text-gray-600 font-light tracking-wider mt-1">
        Your AI companion for Formula 1 insights
      </p>
    </div>
  );
};

export default Header;
