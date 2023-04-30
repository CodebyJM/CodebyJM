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
      <div className="bg-[rgb(0,0,0)] text-white" id="about">
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
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const GET_POSTS = gql`
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
  `
  const posts_response = await client.query({
    query: GET_POSTS,
  })

  console.log(posts_response)

  const posts = posts_response?.data?.posts?.nodes

  const GET_PROJECTS = gql`
    query GetAllProjects {
      projects {
        nodes {
          title
          uri
          content
          acfProjects {
            source {
              url
            }
          }
        }
      }
    }
  `
  const response = await client.query({
    query: GET_PROJECTS,
  })

  const projects = response?.data?.projects?.nodes

  return {
    props: {
      posts,
      projects,
    },
  }
}
