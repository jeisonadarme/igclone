import React from 'react'

interface ISuggestion {
  id: string
  userName: string
  image: string
  description: string
}

function Suggestion({ userName, image, description, id }: ISuggestion) {
  return (
    <div
      className="grid items-center w-full grid-cols-5 mt-2 cursor-pointer"
      key={id}
    >
      <img className="w-8 h-8 mr-0 rounded-full cursor-pointer" src={image} />
      <div className="col-span-3 ol-start-2">
        <div className="text-sm font-semibold">{userName}</div>
        <div className="text-sm text-gray-400 truncate w-30">{description}</div>
      </div>
      <div className="text-xs font-bold text-blue-500 justify-self-end">
        Follow
      </div>
    </div>
  )
}

export default Suggestion
