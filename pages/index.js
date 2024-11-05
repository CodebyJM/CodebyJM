import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Blog from '../components/Blog'
import WorkExperience from '../components/WorkExperience'



export default function Home({ posts }) {
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
