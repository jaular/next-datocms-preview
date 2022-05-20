import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { PostProps } from "lib/types";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getAllPostsSlug, getPostBySlug } from "lib/db";
import Container from "~/components/Container";
const ResponsiveImage = dynamic(() => import("~/components/ResponsiveImage"));
import { StructuredText } from "react-datocms";

type Props = {
  post: PostProps;
};

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <Container>
      <Link href="/">
        <a className="text-green-500">Back to home</a>
      </Link>
      <h1 className="mt-4 text-4xl font-bold text-gray-900">{post.title}</h1>

      <div className="mt-6 prose max-w-none">
        <StructuredText
          data={post.content}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "ImageBlockRecord":
                return (
                  <div className="flex justify-center">
                    <ResponsiveImage image={record.image.responsiveImage} />
                  </div>
                );
              default:
                return (
                  <>
                    <p>Do not know how to render a block!</p>
                    <pre>{JSON.stringify(record, null, 2)}</pre>
                  </>
                );
            }
          }}
        />
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await getAllPostsSlug();

  const paths = result.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "" } = context.params as { slug: string };
  const preview = context.preview || false;
  const post = await getPostBySlug(slug, preview);

  if (!post) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
