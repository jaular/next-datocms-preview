import type { GetStaticProps, NextPage } from "next";
import type { AllPostProps } from "lib/types";
import { getAllPosts } from "lib/db";
import Container from "~/components/Container";
import Grid from "~/components/Grid";
import Banner from "~/components/Banner";

type Props = {
  posts: AllPostProps[];
  preview: boolean;
};

const Home: NextPage<Props> = ({ posts, preview }) => {
  return (
    <Container title="Next.js with DatoCMS">
      <Banner preview={preview} />
      <Grid posts={posts} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = context.preview || false;
  const posts = await getAllPosts(preview);

  return {
    props: {
      posts,
      preview,
    },
  };
};

export default Home;
