import Link from 'next/link'

export default function Navbar() {
  const menus = [
    {
      id: 1,
      title: 'S | N',
      route: '/',
    },
    {
      id: 2,
      title: 'What I do',
      route: '/whatido',
    },
    {
      id: 3,
      title: 'What I think',
      route: '/whatithink',
    },
    {
      id: 4,
      title: 'What I read',
      route: '/whatiread',
    },
    {
      id: 5,
      title: 'Chat with me',
      route: '/chatwithme',
    },
  ]

  return (
    <>
      <div className="grid grid-flow-col place-items-center gap-20 bg-[#2f323a] rounded-3xl p-6">
        <div className="flex space-x-7 justify-center">
          {menus.map((menu) => (
            <Link
              className="hover:underline"
              key={menu.id}
              href={menu.route}
            >
              {menu.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
