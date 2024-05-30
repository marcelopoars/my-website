import Image from 'next/image'
import { LogoProps } from './interfaces'

const orientationMap = {
  horizontal: {
    width: 146,
    height: 26,
  },
  vertical: {
    width: 190,
    height: 61,
  },
}

export function LogoDicaDoNerd({ orientation = 'vertical' }: LogoProps) {
  return (
    <>
      <Image
        className={`hidden dark:block`}
        src={`/logos/logo-dica-do-nerd-${orientation}-dark.svg`}
        alt="Logo Dica do Nerd"
        width={orientationMap[orientation].width}
        height={orientationMap[orientation].height}
        quality={100}
      />

      <Image
        className={`block dark:hidden`}
        src={`/logos/logo-dica-do-nerd-${orientation}-light.svg`}
        alt="Logo Dica do Nerd"
        width={orientationMap[orientation].width}
        height={orientationMap[orientation].height}
        quality={100}
      />
    </>
  )
}
