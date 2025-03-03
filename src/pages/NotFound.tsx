import { useNavigate } from 'react-router';

import Button from '../components/Button';
import { routes } from '../routes';

const NotFound = () => {
  let navigate = useNavigate();

  return (
    <main>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1>404 - Page Not Found</h1>
        <Button className="mt-6" onClick={() => navigate(routes.home)}>
          Back to home
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
