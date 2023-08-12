import WorkArtice from '../content/work.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work | Soheil Nazari',
  description: 'How I spent my time',
}

export default function Work() {
  return (
    <article className='prose w-full'>
      <WorkArtice />
    </article>
  )
}
