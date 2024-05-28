import Image from 'next/image'

export function LogoDicaDoNerd() {
  return (
    <>
      <Image
        className="hidden dark:block"
        src="/logo-dica-do-nerd-horizontal-dark.svg"
        alt="Logo Dica do Nerd"
        width={146}
        height={26}
      />

      <Image
        className="block dark:hidden"
        src="/logo-dica-do-nerd-horizontal-light.svg"
        alt="Logo Dica do Nerd"
        width={146}
        height={26}
      />
    </>
  )
}
