'use client'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import { PhotoStack } from '@/components/ui/photo-stack'
import { PHOTOS } from '@/app/data'

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[600px] px-5 pt-12 pb-20">
      <Link
        href="/"
        className="text-sm text-[var(--muted)] hover:text-[var(--text)]"
      >
        ← back
      </Link>

      <div className="mt-10 mb-12">
        <PhotoStack photos={PHOTOS} />
      </div>

      <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
        {siteConfig.name}
      </h1>

      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--muted)]">
        <p>
          I grew up on Sakhalin, an island in the North Pacific just north of
          Japan. Today I live in Basel, a long way from any ocean, and this is
          my cat Juni. I speak Russian and English, and I&apos;m learning German.
        </p>
        <p>
          My life motto is simple: if you never try, you&apos;ll never know. So if
          there&apos;s something you&apos;ve been wanting to try but keep putting off,
          like bouldering, canoeing, walking the Camino de Santiago or learning
          to code from zero, ping me. I&apos;m in, and I&apos;ll help however I
          can!
        </p>
        <p>
          If I don&apos;t reply right away, I&apos;m probably lifting something heavy,
          hiking or skiing in the mountains, or solving a true-crime case from
          my sofa.
        </p>
        <p>
          And yes, I&apos;m still a nerd. So since 2022, I&apos;ve organized hackathons at
          EPFL with AWS, UBS, Logitech, SBB, Swisscom, Swissquote and Huawei.
        </p>
        <p>
          I love digging into the math behind new tech, and I put AI to work
          wherever I can. My agents brief me on tech news before my coffee is
          ready, a voice tutor corrects my spoken German without ever sighing, and
          my MCP server and SKILL.md files make sure my AI assistants remember
          what we decided yesterday and what needs to be done today. My many relatives think I never forget a birthday. I
          don&apos;t. My cron job does.
        </p>
        <p>
          Lately I&apos;ve started bringing all of this together. You&apos;re welcome
          to check it out on{' '}
          <Link
            href="/blog"
            className="text-[var(--text)] underline underline-offset-4 hover:no-underline"
          >
            my blog
          </Link>
          !
        </p>
      </div>

      <div className="mt-6 flex gap-4 text-sm">
        <a
          href={`mailto:${siteConfig.email.user}@${siteConfig.email.domain}`}
          className="text-[var(--muted)] hover:text-[var(--text)]"
        >
          {siteConfig.email.user}@{siteConfig.email.domain}
        </a>
        {siteConfig.socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--text)]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </main>
  )
}
