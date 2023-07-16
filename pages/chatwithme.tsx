import Cal from '../components/cal'
import Contact from '../content/contact.mdx'

export default function ChatWithMe() {
  return (
    <div className="grid place-items-center w-full gap-5 prose">
      <Contact />
      <Cal />
    </div>
  )
}
