import Hello from '../content/hello.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome | Soheil Nazari',
  description: 'Introduction',
}

export default function Home() {
  return (
    <article className='prose w-full'>
      <Hello />
    </article>
  )
}
