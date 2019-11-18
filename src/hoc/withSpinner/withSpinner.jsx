import React from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { css } from '@emotion/core';

const override = css`
  display: flex;
  margin: 0 auto;
  border-color: #ffc107;
`;

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className='center'>
      <ClimbingBoxLoader
        css={override}
        sizeUnit={'px'}
        size={20}
        color={'#ffc107'}
        loading
      />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
