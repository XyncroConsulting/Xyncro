// src/components/ImageComponent.js
import React from 'react';
import { Image } from 'react-bootstrap';

const ImageComponent = ({ src, alt }) => {
  return <Image src={src} alt={alt} fluid />;
};

export default ImageComponent;

