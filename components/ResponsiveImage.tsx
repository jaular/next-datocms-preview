import type { ResponsiveImageProps } from "lib/types";
import Image from "next/image";

type Props = {
  image: ResponsiveImageProps;
};

export const ResponsiveImage = ({ image }: Props) => {
  return (
    <Image
      className="rounded"
      src={image.src}
      alt={image.alt}
      title={image.alt}
      width={image.width}
      height={image.height}
      placeholder="blur"
      blurDataURL={image.base64}
    />
  );
};
