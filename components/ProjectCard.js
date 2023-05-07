import Heading from './Heading'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

export default function ProjectCard({ post }) {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
  })

  return (
    <div class="max-w-sm overflow-hidden bg-[#1F1F1F] z-50 project-card">
      <p className="date text-[#00ffd5]">
        {dateFormatter.format(new Date(post.date))}
      </p>
      <Link href={post.uri} className="hover:text-[#00ffd5]">
        <h3 className="text-4xl font-semibold text-white pt-4">
          {post.title} &rarr;
        </h3>
      </Link>
      <div class="flex pt-4 pb-2 gap-4 items-center ">
        <SocialIcon
          url={post.acfProjects.source.url}
          network="github"
          bgColor="#fff"
          style={{ height: 30, width: 30 }}
          target="_blank"
          rel="noopener noreferrer"
        />
          <div  className="border-2 px-4 py-2 hover:no-underline rounded shadow" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </div>
  )
}
