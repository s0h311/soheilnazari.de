import Hello from '../content/hello.mdx'

export default function Home() {
  return (
    <>
      <div className="grid place-items-start prose">
        <Hello />
      </div>
    </>
  )
}
