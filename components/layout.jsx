import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <div className="py-10 w-[90dvw] md:w-[65dvw] grid place-items-center">
        <Navbar />
        <br className="mb-20" />
        {children}
      </div>
    </>
  )
}
