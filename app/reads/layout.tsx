import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reads | Soheil Nazari',
  description: 'What I read',
}

type ReadsLayoutProps = {
  children: React.ReactNode
}

export default function ReadsLayout({ children }: ReadsLayoutProps) {
  return (
    <>
      <section className='prose w-full'>{children}</section>
    </>
  )
}
