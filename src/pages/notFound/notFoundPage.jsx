import React from 'react';
import { ReactComponent as NotFound } from '../../assets/notFound.svg';
const NotFoundPage = () => {
  return (
    <>
      <div className='not-found'>
        <NotFound />
      </div>
      <p className='mt-3 text-center'>Oops... How did you get here :)</p>
    </>
  );
};

export default NotFoundPage;
