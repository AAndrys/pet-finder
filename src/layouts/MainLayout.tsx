import { Outlet } from 'react-router';

import Logo from '../components/Logo';

import PageTransition from './PageTransition';

const MainLayout = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <header>
          <Logo size="small" />
        </header>

        <main className="flex flex-1 h-screen">
          <Outlet />
        </main>
      </div>
    </PageTransition>
  );
};

export default MainLayout;
