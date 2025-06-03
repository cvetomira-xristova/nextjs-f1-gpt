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
      <body>
        <main className="min-h-screen flex flex-col justify-between p-4 sm:p-10">
          {children}
        </main>
      </body>
    </html>
  );
}
