// src/components/Image.js

import { format } from "date-fns";

export default function Image({ id, urls, user, created_at, likes }) {
  return (
    <>
      <div className=" rounded-lg shadow-md bg-white">
        <article key={id} className="rounded-lg">
          <div className="hover:cursor-zoom-in  ">
            <div className="w-full h-64 bg-white relative  ">
              <img
                className="absolute h-full w-full object-fit inset-0 object-cover bg-center z-0 rounded-lg "
                src={urls.regular}
                alt={user.username}
              />
              <div className="opacity-0 hover:opacity-100 translate-y-1 hover:-translate-y-0 duration-500 absolute inset-0 z-10 flex justify-center items-end text-white font-semibold">
                <div className="flex bg-black bg-opacity-40 border-t-2 border-black h-22 w-full p-5 flex-col md:flex-row items-center md:items-center justify-between">
                  <article className="flex items-center justify-start">
                    <img
                      src={user.profile_image.medium}
                      alt={user.username}
                      className="rounded-full mr-2 w-10 md:w-auto"
                    />
                    <ul>
                      <li className="font-bold">{user.name}</li>
                      <li className="text-sm  opacity-75">
                        {format(new Date(created_at), "dd MMMM yyyy")}
                      </li>
                    </ul>
                  </article>

                  <article className="mt-5 md:mt-0">
                    <small className="opacity-75">
                      {likes} Likes
                    </small>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden Section with Image Info */}
          <div className="hidden p-5 flex-col md:flex-row items-start md:items-center justify-between">
            <article className="flex items-center justify-start">
              <img
                src={user.profile_image.medium}
                alt={user.username}
                className="rounded-full mr-2 w-10 md:w-auto"
              />
              <ul>
                <li className="text-slate-800 font-bold">{user.name}</li>
                <li className="text-sm text-slate-800 opacity-75">
                  {format(new Date(created_at), "dd MMMM yyyy")}
                </li>
              </ul>
            </article>

            <article className="mt-5 md:mt-0">
              <div
                className="text-sm text-slate-800 opacity-75 underline"
                target="_blank"
                rel="noreferrer"
              >
                {user.instagram_username}
              </div>
              <small className="text-slate-800 opacity-75 block">
                {likes} Likes
              </small>
            </article>
          </div>
        </article>
      </div>
    </>
  );
}
