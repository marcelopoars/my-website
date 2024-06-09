import {
  BannerHome,
  Comments,
  DicaDoNerd,
  HeroHome,
  Projects,
} from '@/components'

export default function Home() {
  return (
    <>
      <HeroHome />
      <Projects />
      <DicaDoNerd />
      <Comments />
      <BannerHome />
    </>
  )
}
