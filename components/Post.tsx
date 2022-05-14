import React from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

interface IPost {
  id: string
  userName: string
  userImage: string
  image: string
  caption: string
}

function Post({ id, userName, userImage, caption, image }: IPost) {
  return (
    <div className="bg-white border border-gray-200 rounded-sm my-7 ">
      <div className="flex items-center px-5 py-2">
        <img
          src={userImage}
          alt="userimage"
          className="object-contain w-12 h-12 p-1 mr-3 border rounded-full"
        />
        <p className="flex-1 text-sm font-semibold">{userName}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={image} className="object-cover w-full" />
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center space-x-4">
          <HeartIcon className="btn-icon" />
          <ChatIcon className="btn-icon" />
          <PaperAirplaneIcon className="btn-icon" />
        </div>

        <BookmarkIcon className="btn-icon" />
      </div>
      <p className="p-4 text-sm">
        <span className="font-semibold">{userName}</span> {caption}
      </p>
      <form className="flex items-center px-4 pb-4 space-x-2">
        <EmojiHappyIcon className="btn-icon" />
        <input
          type="text"
          className="flex-1 text-sm border-0 focus:border-0"
          placeholder="Add a comment..."
        />
        <button className="text-sm font-semibold text-blue-200">Post</button>
      </form>
    </div>
  )
}

export default Post
