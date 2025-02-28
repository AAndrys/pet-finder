import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-2">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" />
        </div>
      </header>

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white p-4" role="contentinfo">
        <p>© 2025 Petfinder</p>
      </footer>
    </div>
  );
};

export default MainLayout;
