import React from 'react';
import ContentLoader from 'react-content-loader';

export const Form = props => {
  return (
    <ContentLoader 
      viewBox="0 5 200 31" 
      height={31} 
      width={200} 
      backgroundColor="#bfbfbf"
      foregroundColor="#fafafa"
      {...props}

    >
    {/* <rect height="50" rx="1" ry="1" width="250" x="31" y="5" /> */}
    <rect x="15" y="15" rx="4" ry="4" width="200" height="31" />
  </ContentLoader>
  )
}
