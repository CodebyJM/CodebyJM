import Link from 'next/link';


export default function PostCard({ post }) {

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });


  return (
    <Link href={'blog' + post.uri} className={'card hover:no-underline'}>
      <h3 className='text-black dark:text-white hover:underline dark:decoration-[#00ffd5] decoration-[#0077b6]'>{post.title} &rarr;</h3>
      <p className='date text-black dark:text-white'>{dateFormatter.format(new Date(post.date))}</p>
    </Link>
  );
}
