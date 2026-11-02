import { siteConfig } from '@/site.config'
import type { StackPhoto } from '@/components/ui/photo-stack'

export type Project = {
  name: string
  description: string
  link: string
  video: string
  tags?: string[]
  id: string
}

export type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

export type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

export type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = siteConfig.projects as unknown as Project[]
export const WORK_EXPERIENCE: WorkExperience[] =
  siteConfig.workExperience as unknown as WorkExperience[]
export const BLOG_POSTS: BlogPost[] =
  siteConfig.blogPosts as unknown as BlogPost[]
export const SOCIAL_LINKS: SocialLink[] =
  siteConfig.socialLinks as unknown as SocialLink[]

export const EMAIL_USER = siteConfig.email.user
export const EMAIL_DOMAIN = siteConfig.email.domain
export const EMAIL_DISPLAY = siteConfig.email.display

export const PHOTOS: StackPhoto[] = [
  { src: '/photos/portrait.jpg', alt: 'Mariia Eremina', caption: 'me', position: 'center 35%' },
  { src: '/photos/kitten.jpg', alt: 'Mariia with her cat Juni', caption: 'Juni', position: 'center 30%' },
  { src: '/photos/greenhouse.jpg', alt: 'Mariia in a greenhouse', caption: 'greenhouse', position: '70% 45%' },
  { src: '/photos/yosemite.jpg', alt: 'Mariia in Yosemite', caption: 'yosemite', position: '47% 62%' },
]
