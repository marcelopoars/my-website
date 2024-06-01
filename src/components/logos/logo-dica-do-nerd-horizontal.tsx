import Image from 'next/image'

export function LogoDicaDoNerdHorizontal() {
  return (
    <>
      <Image
        className="hidden dark:block"
        src={`/logos/logo-dica-do-nerd-horizontal-dark.svg`}
        alt="Logo Dica do Nerd"
        width={146}
        height={26}
        quality={100}
      />

      <Image
        className={`block dark:hidden`}
        src={`/logos/logo-dica-do-nerd-horizontal-light.svg`}
        alt="Logo Dica do Nerd"
        width={146}
        height={26}
        quality={100}
      />
    </>
  )
}
