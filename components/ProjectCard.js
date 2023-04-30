import Heading from './Heading'
import Link from 'next/link'

export default function ProjectCard({ post }) {

  
  return (
    <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:width-[900px]">
      <Link href={post.uri} className="hover:no-underline">
        <h3 className="text-4xl font-semibold text-center text-white">
          {post.title} &rarr;
        </h3>
        <p className="text-lg text-center md:text-left ">{post.content}</p>
      </Link>
    </div>
  )
}
