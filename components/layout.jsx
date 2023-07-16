import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <div className="grid place-items-center p-10">
        <Navbar />
        <br className="mb-20" />
        {children}
      </div>
    </>
  )
}
