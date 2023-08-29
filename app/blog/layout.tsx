import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Soheil Nazari',
  description: 'What I think',
}

type BlogLayoutProps = {
  children: React.ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
      <section className='w-full prose'>{children}</section>
  )
}
