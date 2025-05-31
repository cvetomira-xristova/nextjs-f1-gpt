import './global.css';

export const metadata = {
  title: 'F1GPT',
  description:
    'F1GPT is a chatbot that can answer all your Formula One questions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
