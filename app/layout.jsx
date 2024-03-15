import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find rental properties',
  description: 'Find your dream rental properties here',
  keywords: 'rental, properties, rental properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
