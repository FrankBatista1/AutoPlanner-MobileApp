import React from 'react';
import {Image} from 'react-native';

const Logo = () => {
  return (
    <Image
      source={{
        uri: 'https://res.cloudinary.com/duscflsvf/image/upload/v1633316619/International_Marathon_Running_Shoe_Logo_2_xznkd8.png',
      }}
      style={{width: 200, height: 200}}
    />
  );
};

export default Logo;
