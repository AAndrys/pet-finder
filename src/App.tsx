import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import Favourites from './components/Favourites';
import HomeLayout from './layouts/HomeLayout';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Pets from './pages/Pets';
import Quiz from './pages/Quiz';
import { routes } from './routes';

import './styles/App.css';

const App = () => {
  let location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={routes.home} element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path={routes.quiz} element={<MainLayout />}>
            <Route index element={<Quiz />} />
          </Route>

          <Route path={routes.pets} element={<MainLayout />}>
            <Route index element={<Pets />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Favourites />
    </>
  );
};

export default App;
