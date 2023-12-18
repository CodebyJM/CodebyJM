import React from 'react'
import Link from 'next/link'
import { client } from '../lib/apollo'
import { gql } from '@apollo/client'
import { useState } from 'react'




export default function Nav({ post }) {
  const [navbar, setNavbar] = useState(false)
  return (
    <div className="bg-[#181818] z-50 mx-auto max-w-7xl px-10">
      <nav
        className="
      flex flex-wrap
      items-center
      justify-between
      w-full
      py-4
      container
      md:py-0
      mx-auto
      md:px-10
      h-[10vh]
      text-lg 
      text-white
     
    "
      >
        <div>
          <Link
            href="/"
            className="logo text-xl text-center m-auto hover:text-[#00ffd5] hover:no-underline p-2"
          >
            JM ~
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar 
            ? (
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="relative w-full md:flex md:items-center md:w-auto" id="menu">
          <div
            className={`flex-1 justify-self-center absolute md:relative top-8 md:top-0 pb-3 mt-8 md:block md:pb-0 md:mt-0 px-5 md:p-0 bg-[#181818] z-50	right-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul
              className="
          pt-4
          text-base 
          text-white
          md:flex
          md:justify-between 
          md:pt-0"
            >
              <li>
                <Link
                  className="md:p-4 md:py-2 py-4 block hover:text-[#00ffd5] hover:no-underline"
                  href="#about"
              
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="md:p-4 md:py-2 py-4 block hover:text-[#00ffd5] hover:no-underline"
                  href="#projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="md:p-4 md:py-2 py-4 block hover:text-[#00ffd5] hover:no-underline"
                  href="#blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const GET_MENU_ITEMS = gql`
    query GetMenuItems($id: ID = "3") {
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
  `
  const response = await client.query({
    query: GET_MENU_ITEMS,
    variables: {
      id: params.uri,
    },
  })

  const posts = response?.data?.posts
  return {
    props: {
      posts,
    },
  }
}
