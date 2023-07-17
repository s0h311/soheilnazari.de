import GithubIcon from '../public/icons/github.png'
import LinkedInIcon from '../public/icons/linkedin.png'

const Menus = [
  {
    id: 1,
    title: 'Work',
    route: '/work',
  },
  {
    id: 2,
    title: 'Blog',
    route: '/blog',
  },
  {
    id: 3,
    title: 'Reads',
    route: '/reads',
  },
  {
    id: 4,
    title: 'Chat with me',
    route: '/chatwithme',
  },
]

const SocialLinks = [
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

export { Menus, SocialLinks }
