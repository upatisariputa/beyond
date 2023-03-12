import React from "react";
import { ImageElement } from "../../../styles/elementStyles/ImageElementStyles";

type Props = {
  images: string[];
};

const MapImages = ({ images }: Props) => {
  const mappingImages = images.map((image, idx) => (
    <div key={image + idx.toString()}>
      <ImageElement src={image} imgHeight="50vh" imgWidth="40vw" />
    </div>
  ));

  return { mappingImages };
};

export default MapImages;
