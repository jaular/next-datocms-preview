import type { AllPostProps } from "lib/types";
import Link from "next/link";
import ResponsiveImage from "~/components/ResponsiveImage";

const Card = ({ slug, title, description, coverImage }: AllPostProps) => {
  return (
    <Link key={slug} href={`/posts/${slug}`}>
      <a className="group">
        <ResponsiveImage image={coverImage.responsiveImage} />
        <h3 className="mt-2 text-xl font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">{description}</p>
      </a>
    </Link>
  );
};

export default Card;
