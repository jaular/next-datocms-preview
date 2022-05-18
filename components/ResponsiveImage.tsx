import type { ResponsiveImageProps } from "lib/types";
import Image from "next/image";

type Props = {
  title: string;
  image: ResponsiveImageProps;
};

export const ResponsiveImage = ({ title, image }: Props) => {
  return (
    <Image
      src={image.src}
      alt={title}
      title={title}
      width={image.width}
      height={image.height}
      placeholder="blur"
      blurDataURL={image.base64}
    />
  );
};
