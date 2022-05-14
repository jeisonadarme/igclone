import React, { useEffect, useState } from 'react'
import Story from './Story'
import { getCharacters } from 'rickmortyapi'

function Stories() {
  const [suggestions, setSuggestions] = useState([] as any)
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min
  useEffect(() => {
    const fetchData = async () => {
      const characters = await getCharacters({ page: random(1, 20) })
      setSuggestions(characters.data.results)
    }

    fetchData().catch(console.error)
  }, [])

  return (
    <div className="flex p-4 mt-0 space-x-4 overflow-x-scroll bg-white border border-gray-200 rounded-sm scrollbar scrollbar-thumb-gray-200 md:mt-6">
      {suggestions.map((profile: any) => (
        <Story key={profile.id} img={profile.image} userName={profile.name} />
      ))}
    </div>
  )
}

export default Stories

//https://javascript.rickandmortyapi.com/interfaces/interfaces.CharacterFilter.html
