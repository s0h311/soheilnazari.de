import { MDXComponents } from 'mdx/types'
import CustomLink from './components/mdx/CustomLink'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: CustomLink,
    ...components,
  }
}
