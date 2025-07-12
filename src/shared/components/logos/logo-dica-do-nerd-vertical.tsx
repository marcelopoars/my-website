import Image from 'next/image'

export function LogoDicaDoNerdVertical() {
  return (
    <>
      <Image
        className="hidden dark:block w-[148px] lg:w-[190px]"
        src={`/logos/logo-dica-do-nerd-vertical-dark.svg`}
        alt="Logo Dica do Nerd"
        width={190}
        height={61}
        quality={100}
      />

      <Image
        className={`block dark:hidden`}
        src={`/logos/logo-dica-do-nerd-vertical-light.svg`}
        alt="Logo Dica do Nerd"
        width={190}
        height={61}
        quality={100}
      />
    </>
  )
}
