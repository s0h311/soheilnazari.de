import GithubIcon from '@/public/icons/github.png'
import LinkedInIcon from '@/public/icons/linkedin.png'

const Menus = [
  {
    id: 'route1',
    title: 'Work',
    route: '/work',
  },
  {
    id: 'route2',
    title: 'Blog',
    route: '/blog',
  },
  {
    id: 'route3',
    title: 'Reads',
    route: '/reads',
  },
  {
    id: 'route4',
    title: 'Contact',
    route: '/contact',
  },
]

const SocialLinks = [
  {
    id: 'social1',
    title: 'github',
    icon: GithubIcon,
    url: 'https://github.com/s0h311',
  },
  {
    id: 'social2',
    title: 'linkedin',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/soheiln/',
  },
]

export { Menus, SocialLinks }
