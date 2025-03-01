import { Outlet } from 'react-router';

import PageTransition from './PageTransition';

const HomeLayout = () => {
  return (
    <PageTransition>
      <main>
        <Outlet />
      </main>
    </PageTransition>
  );
};

export default HomeLayout;
