import { cn } from "@/lib/utils"

export type AvatarLightsVariants = {
  lightOff: string
  lightOn: string
  darkOff: string
  darkOn: string
}

export function AvatarLights({
  className,
  variants,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  variants: AvatarLightsVariants
}) {
  return (
    <div
      className={cn(
        "pointer-events-none relative size-30 rounded-(--avatar-radius) border border-line bg-background p-1.5 shadow-xs min-[24rem]:size-32 sm:size-40",
        "[--avatar-inner-radius:calc(var(--avatar-radius)-var(--avatar-inset))] [--avatar-inset:--spacing(1.5)] [--avatar-radius:var(--radius-2xl)]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-1.5 overflow-hidden rounded-(--avatar-inner-radius) [clip-path:inset(0_round_var(--avatar-inner-radius))]">
        <AvatarImage
          src={variants.lightOff}
          alt="Avatar with lights off in light mode"
          fetchPriority="high"
        />
      </div>

      <AvatarLayer className="inset-1.5 overflow-hidden rounded-(--avatar-inner-radius) [clip-path:inset(0_round_var(--avatar-inner-radius))] in-[.light[data-avatar-lights=on]]:opacity-100">
        <AvatarImage
          src={variants.lightOn}
          alt="Avatar with lights on in light mode"
          fetchPriority="high"
        />
      </AvatarLayer>

      <AvatarLayer className="inset-1.5 overflow-hidden rounded-(--avatar-inner-radius) [clip-path:inset(0_round_var(--avatar-inner-radius))] in-[.dark[data-avatar-lights=off]]:opacity-100">
        <AvatarImage
          src={variants.darkOff}
          alt="Avatar with lights off in dark mode"
          fetchPriority="high"
        />
      </AvatarLayer>

      <AvatarLayer className="inset-1.5 overflow-hidden rounded-(--avatar-inner-radius) [clip-path:inset(0_round_var(--avatar-inner-radius))] in-[.dark[data-avatar-lights=on]]:opacity-100">
        <AvatarImage
          src={variants.darkOn}
          alt="Avatar with lights on in dark mode"
          fetchPriority="high"
        />
      </AvatarLayer>
    </div>
  )
}

function AvatarLayer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      // `transition-opacity!` is required here because `next-themes`
      // temporarily applies `transition: none !important` to all elements
      // during theme changes (`disableTransitionOnChange`).
      // We override that behavior so the avatar can still fade smoothly.
      //
      // Ref: https://paco.me/writing/disable-theme-transitions
      className={cn(
        "absolute opacity-0 transition-opacity! duration-1200 ease-[cubic-bezier(0.42,0,0.58,1)]",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  src,
  alt,
  ...props
}: React.ComponentProps<"img">) {
  return (
    <img
      className={cn(
        "size-full -translate-x-0.5 scale-100 object-cover select-none",
        className
      )}
      src={src}
      alt={alt}
      {...props}
    />
  )
}
