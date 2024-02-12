import Link from "next/link"
import { SocialMediaContainer, SocialMediaItem } from "./style"

export default function SocialMedia() {
  return (
    <SocialMediaContainer>
      <SocialMediaItem>
        <Link href="/" prefetch={false}>
          Instagram
        </Link>
      </SocialMediaItem>
      <SocialMediaItem>
        <Link href="/" prefetch={false}>
          Facebook
        </Link>
      </SocialMediaItem>
      <SocialMediaItem>
        <Link href="/" prefetch={false}>
          Youtube
        </Link>
      </SocialMediaItem>
    </SocialMediaContainer>
  )
}
