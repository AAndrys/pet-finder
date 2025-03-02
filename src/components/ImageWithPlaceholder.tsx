import { FC, ImgHTMLAttributes, useState } from 'react';

import ImagePlaceholder from '../assets/pngs/image-placeholder.png';

interface ImageWithPlaceholderProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | undefined;
  alt: string;
}

const ImageWithPlaceholder: FC<ImageWithPlaceholderProps> = ({
  src,
  alt,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <img
      src={isLoading ? ImagePlaceholder : src}
      alt={alt}
      onLoad={handleImageLoad}
      {...props}
    />
  );
};

export default ImageWithPlaceholder;
