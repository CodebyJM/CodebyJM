import Head from 'next/head';
import client from '../../lib/apolloClient';
import { gql } from '@apollo/client';
import Header from '../../components/Header';
import Link from 'next/link';


export default function SlugPage({ post }) {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className='bg-[#181818] text-white'>
      <Head>
        <title>{post.title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <section id="Header">
        <Header />
      </section>


      {/* Breadcrumb Link */}
      <div className="max-w-3xl mx-auto px-6 py-4">
        <Link href="/" className="text-custom-green hover:underline">Home</Link>
        <span className="text-gray-400"> / </span>
        <span className="text-white">{post.title}</span>
      </div>

      <main className="pt-8 pb-16 max-w-3xl mx-auto" style={{height: '100vh'}}>
        <div className="siteHeader py-10">
          <h1 className="text-white text-center uppercase tracking-[2px] text-6xl mb-6">{post.title}</h1>
          <p className="text-white text-center">
            {`${post.author.node.firstName} ${post.author.node.lastName}`} &nbsp;&nbsp;|&nbsp;&nbsp;{dateFormatter.format(new Date(post.date))}
          </p>
        </div>
        <article className="lead leading-loose" dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </main>
    </div>
  );
}

// Fetch post by URI
export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query GetPostByUri($id: ID = "") {
      post(id: $id, idType: URI) {
        title
        content
        date
        uri
        author {
          node {
            lastName
            firstName
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: `/${params.uri}/`,
    },
  });

  const post = response?.data?.post;

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

// Get paths for all posts
export async function getStaticPaths() {
  const GET_ALL_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          uri
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_ALL_POSTS,
  });

  const paths = response.data.posts.nodes.map((post) => ({
    params: { uri: post.uri.replace(/^\/|\/$/g, '') },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
