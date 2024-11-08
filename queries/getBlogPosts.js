// queries/getBlogPosts.js
import { gql } from '@apollo/client';

export const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    posts {
      nodes {
        id
        title
        slug
        excerpt
        date
        uri
      }
    }
  }
`;
