import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Blog from '../components/Blog'
import WorkExperience from '../components/WorkExperience'
import client from '../lib/apolloClient'
import { GET_BLOG_POSTS } from '../queries/getBlogPosts'



export default function Home({ posts }) {

  console.log("Posts data in Home component:", posts); // Logs on the client-side in the browser console

  return (
    <div>
      <Head>
        <title>Developer, Designer, & Creator | CodeByJM</title>
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

        <section id="workexp">
          <WorkExperience />
        </section>

    
        <section id="blog">
          <Blog posts={posts} />
        </section>

        <section id='content'></section>
      </div>
    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_BLOG_POSTS,
  })

  console.log("Data fetched in getStaticProps:", data); // This will log on the server


  return {
    props: {
      posts: data.posts.nodes,
    },
    revalidate: 1, // Revalidate data periodically
  }
}