import React from 'react'
import PostCard from '../components/PostCard';
import Heading from '../components/Heading';

export default function SlugPage({ posts }) {
  return (
    <div className="relative text-center px-10 mx-auto py-16 space-y-10">
        <Heading title="Blog" />

        <div className="grid max-w-7xl px-10 gap-2">
          {posts && posts.map((post) => {
            return <PostCard key={post.uri} post={post}></PostCard>;
          })}
        </div>
    </div>
  );
}
