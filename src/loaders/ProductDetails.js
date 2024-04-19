import React from 'react'
import ContentLoader from 'react-content-loader';
import { useScreenSize } from '../hooks/useScreenSize';

export const ProductDetails = props => {

  const { width } = useScreenSize();
  
  if ( width <= 767 ) {

    return (
      
      <ContentLoader 
      viewBox="0 0 1300 500" 
      height={500} 
      width={1300} 
      backgroundColor="#eaeced"
      foregroundColor="#ffffff"
      {...props}
    >

      <rect x="10" y="0" rx="10" ry="10" width="315" height="100" />
      <rect x="10" y="120" rx="10" ry="10" width="315" height="100" />
      <rect x="10" y="240" rx="10" ry="10" width="315" height="100" />
      <rect x="10" y="360" rx="10" ry="10" width="315" height="100" />

      {/* <rect x="92" y="347" rx="5" ry="5" width="45" height="45" />
      <rect x="148" y="347" rx="5" ry="5" width="45" height="45" />
      <rect x="205" y="347" rx="5" ry="5" width="45" height="45" />
      <rect x="361" y="17" rx="10" ry="10" width="420" height="33" />
      <rect x="361" y="71" rx="10" ry="10" width="315" height="33" />
      <rect x="361" y="125" rx="10" ry="10" width="233" height="20" />
      <rect x="361" y="216" rx="5" ry="5" width="195" height="13" />
      <rect x="361" y="251" rx="5" ry="5" width="195" height="13" />
      <rect x="367" y="311" rx="8" ry="8" width="130" height="38" />
      <rect x="515" y="311" rx="8" ry="8" width="130" height="38" /> */}
    </ContentLoader>
      
    )

  }

  return (

    <ContentLoader 
        viewBox="0 0 1300 500" 
        height={500} 
        width={1300} 
        backgroundColor="#eaeced"
        foregroundColor="#ffffff"
        {...props}
      >
  
        <rect x="10" y="0" rx="10" ry="10" width="240" height="100" />
        <rect x="270" y="0" rx="10" ry="10" width="240" height="100" />
        <rect x="530" y="0" rx="10" ry="10" width="240" height="100" />
        <rect x="790" y="0" rx="10" ry="10" width="240" height="100" />
        {/* <rect x="92" y="347" rx="5" ry="5" width="45" height="45" />
        <rect x="148" y="347" rx="5" ry="5" width="45" height="45" />
        <rect x="205" y="347" rx="5" ry="5" width="45" height="45" />
        <rect x="361" y="17" rx="10" ry="10" width="420" height="33" />
        <rect x="361" y="71" rx="10" ry="10" width="315" height="33" />
        <rect x="361" y="125" rx="10" ry="10" width="233" height="20" />
        <rect x="361" y="216" rx="5" ry="5" width="195" height="13" />
        <rect x="361" y="251" rx="5" ry="5" width="195" height="13" />
        <rect x="367" y="311" rx="8" ry="8" width="130" height="38" />
        <rect x="515" y="311" rx="8" ry="8" width="130" height="38" /> */}
      </ContentLoader>
      
    
  )
}

ProductDetails.metadata = {
  name: 'Mohd Arif Uddin', // My name
  github: 'Arif-un', // Github username
  description: 'E-Commerce / Online Shop Product Details page', // Little tagline
  filename: 'ProductDetails', // filename of your loader
}

export default ProductDetails
