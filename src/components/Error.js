// src/components/Error.js

import React from "react"

export default function Error() {
  // Returns Error page if page doesn't exist
  return (
    <>
      <section className="flex items-center justify-center text-center h-56">
        <h1 className="text-slate-400">
          <span className="text-white text-xl font-bold">Error 404</span> | This
          page does not exist
        </h1>
      </section>
    </>
  )
}
