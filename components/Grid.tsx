import type { CardPostProps } from "lib/types";
import { Card } from "components";

type Props = {
  posts: CardPostProps[];
};

export const Grid = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
      {posts.map((post) => (
        <Card
          key={post.slug}
          title={post.title}
          slug={post.slug}
          description={post.description}
          coverImage={post.coverImage}
        />
      ))}
    </div>
  );
};
