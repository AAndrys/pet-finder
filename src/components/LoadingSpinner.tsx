import { CSSProperties, FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface LoadingSpinnerProps {}

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
};

const LoadingSpinner: FC<LoadingSpinnerProps> = () => {
  return (
    <div className="mt-4">
      <ClipLoader cssOverride={override} aria-label="Loading Spinner" />
    </div>
  );
};

export default LoadingSpinner;
