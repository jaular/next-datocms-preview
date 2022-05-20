import { GraphQLClient } from "graphql-request";

export const graphqlRequest = async (
  query: string,
  preview?: boolean,
  variables?: {}
) => {
  let endpoint = "https://graphql.datocms.com";

  if (preview) {
    endpoint += `/preview`;
  }

  const datocmsClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });

  const data = await datocmsClient.request(query, variables);

  return data;
};
