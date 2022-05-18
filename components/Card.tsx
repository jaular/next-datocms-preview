import type { CardPostProps } from "lib/types";
import Link from "next/link";
import { ResponsiveImage } from "components";

export const Card = ({
  slug,
  title,
  description,
  coverImage,
}: CardPostProps) => {
  return (
    <Link key={slug} href={`/posts/${slug}`}>
      <a className="group">
        <ResponsiveImage title={title} image={coverImage.responsiveImage} />
        <h3 className="mt-2 text-xl font-medium text-white">{title}</h3>
        <p className="mt-1 text-base text-gray-300">{description}</p>
      </a>
    </Link>
  );
};
