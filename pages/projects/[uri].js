import Head from 'next/head';
import client from '../../lib/apolloClient'
import { gql } from '@apollo/client';

export default function SlugPage({ project }) {
  return (
    <div>
      <Head>
        <title>{project.title}</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <div className="siteHeader">
          <h1 className="title">{project.title}</h1>
        </div>
        <article
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></article>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_PROJECT_BY_URI = gql`
    query GetProjectByUri($id: ID = "") {
      project(id: $id, idType: URI) {
        title
        content
        uri
      }
    }
  `;

  const response = await client.query({
    query: GET_PROJECT_BY_URI,
    variables: {
      id: params.uri,
    },
  });
  const project = response?.data?.project;
  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
