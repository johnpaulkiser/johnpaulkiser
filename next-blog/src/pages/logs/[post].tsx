import { useRouter } from 'next/router'

export default function Post() {
  const { post } = useRouter().query
  return `${post}`
}
