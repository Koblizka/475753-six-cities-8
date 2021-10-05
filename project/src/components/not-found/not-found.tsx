import {Fragment} from 'react';
import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element{
  return (
    <Fragment>
      <h1>404. Page not found</h1>
      <hr />
      <Link to='/'>Back to main page</Link>
    </Fragment>
  );
}

export {NotFoundScreen};
