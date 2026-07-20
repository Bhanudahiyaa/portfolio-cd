const COVER_LIGHT = "/images/profile-cover-light.jpg"
const COVER_DARK = "/images/profile-cover-dark.jpg"

export function ProfileActivityMosaicCover() {
  return (
    <div
      className="screen-line-top screen-line-bottom w-full border-x border-line px-0.5 py-0.75 before:-top-px after:-bottom-px"
      aria-hidden
    >
      <div className="relative overflow-hidden rounded-(--cover-radius) border border-line bg-background p-1.5 shadow-xs [--cover-inner-radius:calc(var(--cover-radius)-var(--cover-inset))] [--cover-inset:--spacing(1.5)] [--cover-radius:var(--radius-2xl)]">
        <div className="relative aspect-[1080/500] overflow-hidden rounded-(--cover-inner-radius) [clip-path:inset(0_round_var(--cover-inner-radius))]">
          <img
            className="size-full object-cover object-center select-none"
            src={COVER_LIGHT}
            alt=""
            fetchPriority="high"
          />

          <img
            className="absolute inset-0 size-full object-cover object-center opacity-0 transition-opacity! duration-1200 ease-[cubic-bezier(0.42,0,0.58,1)] select-none dark:opacity-100"
            src={COVER_DARK}
            alt=""
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  )
}
