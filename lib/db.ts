import type { CardPostProps, PostProps } from "lib/types";
import { graphqlRequest } from "lib/datocms";
import { gql } from "graphql-request";

export const getAllPosts = async (
  preview: boolean
): Promise<CardPostProps[]> => {
  const ALLPOSTS_QUERY = gql`
    {
      allPosts(orderBy: _createdAt_DESC) {
        title
        slug
        description
        coverImage {
          responsiveImage(imgixParams: { w: "500", h: "500", fm: webp }) {
            src
            width
            height
            alt
            base64
          }
        }
      }
    }
  `;

  const { allPosts } = await graphqlRequest(ALLPOSTS_QUERY, preview);

  return JSON.parse(JSON.stringify(allPosts));
};

export const getPostBySlug = async (
  slug: string,
  preview: boolean
): Promise<PostProps | null> => {
  const POST_QUERY = gql`
    query MyQuery($slug: String) {
      post(filter: { slug: { eq: $slug } }) {
        title
        slug

        content {
          blocks {
            __typename
            id
            image {
              responsiveImage(
                imgixParams: { w: "1200", h: "600", fm: webp, fit: crop }
              ) {
                src
                width
                height
                base64
                alt
              }
            }
          }
          value
        }
      }
    }
  `;

  const variables = {
    slug: slug,
  };

  const { post } = await graphqlRequest(POST_QUERY, preview, variables);

  if (!post) {
    return null;
  }

  return JSON.parse(JSON.stringify(post));
};

export const getAllPostsSlug = async (): Promise<{ slug: string }[]> => {
  const ALLPOSTS_SLUG_QUERY = gql`
    {
      allPosts {
        slug
      }
    }
  `;

  const { allPosts } = await graphqlRequest(ALLPOSTS_SLUG_QUERY);

  return JSON.parse(JSON.stringify(allPosts));
};
