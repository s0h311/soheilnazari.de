import Link from 'next/link'
import BtnWithImg from './btnWithImg'
import GithubIcon from '../public/icons/github.png'
import LinkedInIcon from '../public/icons/linkedin.png'

export default function Navbar() {
  const menus = [
    {
      id: 1,
      title: 'S | N',
      route: '/',
    },
    {
      id: 2,
      title: 'Work',
      route: '/work',
    },
    {
      id: 3,
      title: 'Blog',
      route: '/blog',
    },
    {
      id: 4,
      title: 'Reads',
      route: '/reads',
    },
    {
      id: 5,
      title: 'Chat with me',
      route: '/chatwithme',
    },
  ]

  const links = [
    {
      id: 1,
      title: 'github',
      icon: GithubIcon,
      url: 'https://github.com/s0h311',
    },
    {
      id: 2,
      title: 'linkedin',
      icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/soheiln/',
    },
  ]

  return (
    <>
      <div className="flex items-center justify-center relative w-full bg-[#2f323a] rounded-3xl p-6">
        <div className="flex space-x-10 justify-center">
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
        <div className="absolute right-0 rounded-3xl p-4 flex space-x-4">
          {links.map((link) => (
            <BtnWithImg
              onClick={() => window.open(link.url)}
              key={link.id}
              imgSrc={link.icon}
              height={30}
            />
          ))}
        </div>
      </div>
    </>
  )
}
