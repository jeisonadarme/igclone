import React, { useEffect, useState } from 'react'
import { getCharacters } from 'rickmortyapi'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([] as any)
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min
  useEffect(() => {
    const fetchData = async () => {
      const characters = await getCharacters({ page: random(1, 10) })
      setPosts(characters.data.results)
    }

    fetchData().catch(console.error)
  }, [])

  return (
    <div>
      {posts.map((post: any) => (
        <Post
          id={post.id}
          userName={post.name}
          userImage={post.image}
          caption={post.type}
          image={post.image}
          key={post.id}
        />
      ))}
    </div>
  )
}

export default Posts
