import Books from '../content/books.mdx'

export default function WhatIRead() {
  return (
    <>
      <div className="grid place-items-start w-full prose">
        <Books />
      </div>
    </>
  )
}
