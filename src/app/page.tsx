import { Comments, DicaDoNerd, HeroHome, LastProjects } from '@features/home'

export default function Home() {
  return (
    <>
      <HeroHome />
      <LastProjects />
      <DicaDoNerd />
      <Comments />
    </>
  )
}
