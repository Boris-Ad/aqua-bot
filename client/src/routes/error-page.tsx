import { useRouteError } from 'react-router-dom';
import { IForErrorPage } from '../types/types';

const ErrorPage: React.FC = () => {
  const error = useRouteError() as IForErrorPage;

  return (
    <div className="">
      <h1>Oops!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
