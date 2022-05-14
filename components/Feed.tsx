import React from 'react'
import Posts from './Posts'
import Profile from './Profile'
import Stories from './Stories'

function Feed() {
  return (
    <main className="grid grid-cols-1 px-0 mx-auto md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section>
        <Profile />
      </section>
    </main>
  )
}

export default Feed
