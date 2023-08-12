import Cal from '../components/cal'
import Contact from '../content/contact.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Soheil Nazari',
  description: 'Contact page',
}

export default function ChatWithMe() {
  return (
    <article className='grid place-items-center w-full gap-5 prose'>
      <section className='place-self-start'>
        <Contact />
      </section>
      <Cal />
    </article>
  )
}
