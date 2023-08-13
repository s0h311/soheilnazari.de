import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Soheil Nazari',
  description: 'Contact page',
}

type ContactLayoutProps = {
  children: React.ReactNode
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return (
    <>
      <section className='grid place-items-center w-full gap-5 prose'>{children}</section>
    </>
  )
}
