import Image from "next/image"
import { LogoContainer, Title } from "./style"
import logo from "public/icons/logo.svg"
import Link from "next/link"

export type TypeType = "header" | "footer"

type LogoProps = {
  type: TypeType
}

export default function Logo({ type }: LogoProps) {
  return (
    <LogoContainer type={type}>
      <Link href="/" prefetch={false}>
        <Image
          className="image"
          src={logo}
          width={60}
          height={60}
          alt="Logo da CNBN"
          priority
        />
      </Link>
      <Title type={type}>CNBN</Title>
    </LogoContainer>
  )
}
