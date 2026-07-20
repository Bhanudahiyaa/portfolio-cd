import Image from "next/image"
import { addQueryParams } from "@/utils/url"
import { ArrowUpRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import type { SocialLink } from "@/features/portfolio/types/social-links"

const SOCIAL_LINK_UTM_PARAMS = {
  utm_source: "69ftw.site",
}

export function SocialLinkItem({ icon, title, href }: SocialLink) {
  const isEmailLink = href.startsWith("mailto:")
  const isWhatsAppLink = href.startsWith("https://wa.me/")
  const hrefWithTracking =
    isEmailLink || isWhatsAppLink
      ? href
      : addQueryParams(href, SOCIAL_LINK_UTM_PARAMS)

  return (
    <div
      className={cn(
        "relative flex cursor-pointer items-center gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent-muted"
      )}
    >
      <div className="relative size-8 shrink-0 [--image-radius:var(--radius-lg)]">
        <Image
          className="size-full rounded-(--image-radius) object-contain select-none"
          src={icon}
          alt={`${title} logo`}
          width={32}
          height={32}
          quality={100}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-(--image-radius) inset-ring-1 inset-ring-black/10 dark:inset-ring-white/15" />
      </div>

      <h3 className="flex-1 font-medium">
        <a
          href={hrefWithTracking}
          target={isEmailLink ? undefined : "_blank"}
          rel={isEmailLink ? undefined : "noopener"}
        >
          <span className="absolute inset-0" aria-hidden />
          {title}
        </a>
      </h3>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </div>
  )
}
