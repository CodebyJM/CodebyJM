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
      <p className="pt-4 text-lg text-center md:text-left ">{post.content}</p>
      <div class="pt-4 pb-2">
        <SocialIcon
          url="#"
          network="github"
          bgColor="#fff"
          style={{ height: 30, width: 30 }}
        />
      </div>
    </div>
  )
}
