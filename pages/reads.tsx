import Books from '../content/books.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reads | Soheil Nazari',
  description: 'What I read',
}

export default function Reads() {
  return (
    <article className='prose w-full'>
      <Books />
    </article>
  )
}
