import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion'
import { getCharacters } from 'rickmortyapi'
import { profileEnd } from 'console'

function Profile() {
  const [suggestions, setSuggestions] = useState([] as any)
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min
  useEffect(() => {
    const fetchData = async () => {
      const characters = await getCharacters({ page: random(1, 20) })
      setSuggestions(characters.data.results?.slice(1, 10))
      console.log(characters.data.results)
    }

    fetchData().catch(console.error)
  }, [])
  return (
    <div className="hidden pt-4 pl-4 mt-8 ml-4 lg:inline-block">
      <div className="grid items-center w-full grid-cols-3 cursor-pointer">
        <div>
          <img
            className="w-16 h-16 rounded-full cursor-pointer"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"
          />
        </div>
        <div className="">
          <div className="text-sm font-semibold">jeisonadarme</div>
          <div className="text-sm text-gray-400">Jeison</div>
        </div>
        <div className="text-xs font-bold text-blue-500 justify-self-end">
          Switch
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm font-semibold text-gray-500">
          Suggestions For You
        </span>
        <span className="text-xs font-semibold cursor-pointer">See All</span>
      </div>

      {suggestions.map((profile: any) => (
        <Suggestion
          key={profile.id}
          id={profile.id}
          userName={profile.name}
          image={profile.image}
          description={profile.status}
        />
      ))}
    </div>
  )
}

export default Profile
