/**
 * mobile: false
 */
import React from 'react';

type WrapperProps = {
  url: string;
};

const Wrapper = (props: WrapperProps) => {
  return (
    <div style={{ width: '100%', height: '1000px' }}>
      <iframe
        src={props.url}
        frameBorder="0"
        id="demo-demo"
        style={{ width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default Wrapper;
