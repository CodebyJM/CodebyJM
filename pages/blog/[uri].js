import Head from 'next/head';
import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';
import Header from '../../components/Header'


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


      <main class="pt-8 pb-16 max-w-3xl mx-auto">
        <div className="siteHeader py-10">
          <h1 className="text-white text-center center uppercase tracking-[2px] text-white text-6xl mb-6">{post.title}</h1>
          <p className="text-white text-center center">
            
            {`${post.author.node.firstName} ${post.author.node.lastName}`} &nbsp;&nbsp;|
            &nbsp;&nbsp;{dateFormatter.format(new Date(post.date))}
          </p>
        </div>
        <article className="lead leading-loose" dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </main>

      
    </div>
  );
}

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
      id: params.uri,
    },
  });
  const post = response?.data?.post;
  return {
    props: {
      post,
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
