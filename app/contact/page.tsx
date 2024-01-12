import Reclaim from '@/components/reclaim'
import Content from '@/content/contact.mdx'

export default function Contact() {
  return (
    <section className='relative w-full'>
      <section className='w-full place-self-start'>
        <Content />
      </section>
      {
        // <Cal />
      }
      <Reclaim />
    </section>
  )
}
