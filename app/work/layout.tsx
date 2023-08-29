import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work | Soheil Nazari',
  description: 'How I spent my time',
}

type WorkLayoutProps = {
  children: React.ReactNode
}

export default function WorkLayout({ children }: WorkLayoutProps) {
  return <section>{children}</section>
}
