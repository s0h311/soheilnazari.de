import Articles from '../content/blog.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Soheil Nazari',
  description: 'What I think',
}

export default function Blog() {
  return (
    <article className='prose w-full'>
      <Articles />
    </article>
  )
}
