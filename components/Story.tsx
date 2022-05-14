import React from 'react'

interface IStory {
  img: string
  userName: string
}

function Story({ img, userName }: IStory) {
  return (
    <div className="">
      <img
        src={img}
        alt=""
        className="h-16 w-16 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px]"
      />
      <p className="w-16 text-xs text-center truncate">{userName}</p>
    </div>
  )
}

export default Story
