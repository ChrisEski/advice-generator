import './globals.css';

export const metadata = {
  title: 'Advice Generator | Frontend Mentor',
  description:
    'Simple API based advice generator app. Challenge from Frontend Mentor',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex items-center justify-center font-body font-semibold text-base bg-dark text-light-blue leading-tight p-4">
        {children}
      </body>
    </html>
  );
}
