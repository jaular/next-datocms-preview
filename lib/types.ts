import type {
  StructuredText,
  Record,
  Document,
  Node,
} from "datocms-structured-text-utils";

export type ResponsiveImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  base64: string;
};

export type CardPostProps = {
  title: string;
  slug: string;
  description: string;
  coverImage: {
    responsiveImage: ResponsiveImageProps;
  };
};

interface MyBlockRecord extends Record {
  image: {
    responsiveImage: ResponsiveImageProps;
  };
}

export type PostProps = {
  title: string;
  slug: string;
  content:
    | StructuredText<MyBlockRecord, MyBlockRecord>
    | Document
    | Node
    | null
    | undefined;
};
