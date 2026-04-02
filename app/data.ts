import { siteConfig } from '@/site.config'

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
