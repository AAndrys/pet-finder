import { Route, Routes } from 'react-router';

import HomeLayout from './layouts/HomeLayout';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Quiz from './pages/Quiz';
import { routes } from './routes';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path={routes.quiz} element={<MainLayout />}>
        <Route index element={<Quiz />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
