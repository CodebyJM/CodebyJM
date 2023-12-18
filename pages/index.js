import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import { client } from '../lib/apollo'
import { gql } from '@apollo/client'

export default function Home({ posts, projects }) {
  return (
    <div>
      <Head>
        <title>CodeByJM</title>
      </Head>
      <div className="bg-[#181818] text-white" id="about">
        <section id="Header">
          <Header />
        </section>

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects projects={projects} />
        </section>

        <section id="blogs">
          <Blog posts={posts} />
        </section>

        <section id='content'></section>
      </div>
    </div>
  )
}
export async function getStaticProps() {
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL + '/graphql';

  const GET_POSTS = `
    query GetAllPosts {
      posts {
        nodes {
          title
          date
          content
          uri
          modified
          excerpt
        }
      }
    }
  `;

  const GET_PROJECTS = `
    query GetAllProjects {
      projects {
        nodes {
          title
          uri
          content
          date
          modified
          acfProjects {
            source {
              url
            }
            link {
              url
            }
          }
        }
      }
    }
  `;

  async function fetchGraphQL(query) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const json = await res.json();
    return json.data;
  }

  let posts = null;
  let projects = null;

  try {
    const postsResponse = await fetchGraphQL(GET_POSTS);
    posts = postsResponse.posts.nodes;
    console.log(posts)
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  try {
    const projectsResponse = await fetchGraphQL(GET_PROJECTS);
    projects = projectsResponse.projects.nodes;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return {
    props: {
      posts,
      projects,
    },
    revalidate: 60,
  };
}
