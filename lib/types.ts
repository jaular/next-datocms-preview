export type BodyProps = {
  title: string;
  description: string;
  slug: string;
};

export type ResponsiveImageProps = {
  src: string;
  width: number;
  height: number;
  base64: string;
};

export interface CardPostProps extends BodyProps {
  coverImage: {
    responsiveImage: ResponsiveImageProps;
  };
}
