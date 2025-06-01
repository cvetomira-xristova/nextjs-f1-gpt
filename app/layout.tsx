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
        <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 w-full max-w-full sm:max-w-2xl md:max-w-4xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
