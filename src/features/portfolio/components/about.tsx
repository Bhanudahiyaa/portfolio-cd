import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { Panel } from "@/features/portfolio/components/panel"

const ID = "hey-im"

export function About() {
  return (
    <Panel id={ID}>
      <GitHubContributions />
    </Panel>
  )
}
