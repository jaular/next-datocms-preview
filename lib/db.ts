import type { BodyProps, ResponsiveImageProps } from "lib/types";
import { graphqlRequest } from "lib/datocms";
import { gql } from "graphql-request";

interface Props extends BodyProps {
  coverImage: ResponsiveImageProps;
}

type AllPostsProps = {
  allPosts: Props[];
};

export const getAllPosts = async (preview: boolean): Promise<Props[]> => {
  const ALLPOSTS_QUERY = gql`
    {
      allPosts(orderBy: _createdAt_DESC) {
        title
        description
        slug
        coverImage {
          responsiveImage(imgixParams: { w: "500", h: "500", fm: jpg }) {
            src
            width
            height
            base64
          }
        }
      }
    }
  `;

  const { allPosts }: AllPostsProps = await graphqlRequest(
    ALLPOSTS_QUERY,
    preview
  );

  return JSON.parse(JSON.stringify(allPosts));
};
