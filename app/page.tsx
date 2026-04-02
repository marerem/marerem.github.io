'use client'
import { motion, useInView, useSpring, useTransform } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL_USER,
  EMAIL_DOMAIN,
  EMAIL_DISPLAY,
  SOCIAL_LINKS,
} from './data'
import { siteConfig } from '@/site.config'
import { useEffect, useRef } from 'react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  if (!src) return null
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function AnimatedCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { bounce: 0, duration: 2000 })
  const display = useTransform(spring, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  return (
    <div ref={ref} className="text-center">
      <motion.span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        {display}
      </motion.span>
      <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-[10px] text-zinc-500">
        {label}
      </p>
    </div>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        id="bio"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <p className="text-zinc-600 dark:text-zinc-300">{siteConfig.bio}</p>
        <p className="mt-3 font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500">
          {siteConfig.tagline}
        </p>
      </motion.section>

      {siteConfig.counters.length > 0 && (
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <div className="grid grid-cols-4 gap-4 rounded-2xl border border-zinc-200/60 bg-white/50 p-6 backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/30">
            {siteConfig.counters.map((c) => (
              <AnimatedCounter
                key={c.label}
                value={c.value}
                label={c.label}
              />
            ))}
          </div>
        </motion.section>
      )}

      <motion.section
        id="projects"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="flex flex-col space-y-2">
          {PROJECTS.map((project) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {project.name}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-1.5">
                    {(project.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-100 px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.video && <ProjectVideo src={project.video} />}
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500 dark:text-zinc-400">
                    {job.start} — {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {siteConfig.education.length > 0 && (
        <motion.section
          id="education"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-5 text-lg font-medium">Education</h3>
          <div className="space-y-3 text-sm">
            {siteConfig.education.map((edu) => (
              <div key={edu.degree} className="flex justify-between">
                <div>
                  <p className="font-normal text-zinc-900 dark:text-zinc-100">
                    {edu.degree}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {edu.school}
                  </p>
                </div>
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500 dark:text-zinc-400">
                  {edu.start} — {edu.end}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      <motion.section
        id="blog"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        id="connect"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <div className="flex items-start gap-6">
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-zinc-100 dark:ring-zinc-800">
            <img
              src={siteConfig.avatarPath}
              alt={siteConfig.name}
              className="h-full w-full scale-[1.6] translate-y-[5%] object-cover object-[center_0%]"
            />
          </div>
          <div>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              Feel free to contact me at{' '}
              <a
                className="font-[family-name:var(--font-geist-mono)] text-sm underline dark:text-zinc-300"
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = `mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`
                }}
              >
                {EMAIL_DISPLAY}
              </a>
            </p>
            <div className="flex items-center justify-start space-x-3">
              {SOCIAL_LINKS.map((link) => (
                <MagneticSocialLink key={link.label} link={link.link}>
                  {link.label}
                </MagneticSocialLink>
              ))}
              {siteConfig.cvPath && (
                <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
                  <a
                    href={siteConfig.cvPath}
                    download
                    className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                  >
                    Download CV
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                    >
                      <path
                        d="M7.5 1C7.77614 1 8 1.22386 8 1.5V8.29289L10.1464 6.14645C10.3417 5.95118 10.6583 5.95118 10.8536 6.14645C11.0488 6.34171 11.0488 6.65829 10.8536 6.85355L7.85355 9.85355C7.65829 10.0488 7.34171 10.0488 7.14645 9.85355L4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645C4.34171 5.95118 4.65829 5.95118 4.85355 6.14645L7 8.29289V1.5C7 1.22386 7.22386 1 7.5 1ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12H12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12.5C13 12.7761 12.7761 13 12.5 13H2.5C2.22386 13 2 12.7761 2 12.5V10.5C2 10.2239 2.22386 10 2.5 10Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Magnetic>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
