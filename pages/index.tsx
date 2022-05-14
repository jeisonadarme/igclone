import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gray-50">
      <Head>
        <title>Rick and Morty - IG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
    </div>
  )
}

export default Home

//flex flex-col items-center justify-center min-h-screen py-2
