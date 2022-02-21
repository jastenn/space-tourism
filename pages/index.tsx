import { useRouter } from "next/router"
import type { NextPage } from "next/types"

const Home: NextPage = () => {
  const router = useRouter()
  const startExplorationHandler = () => {
    router.push("/destination")
  }

  return (
    <main className="mt-6 w-full mb-20 md:mb-24 md:mt-[6.625rem] xm:mt-44 lg:mt-60 xm:mb-[unset]">
      <article className="text-center mx-auto max-w-[28.13rem] xm:text-left xm:mx-[unset] xm:mr-auto">
        <h5 className="font-sans-condensed text-base md:text-xl uppercase tracking-widest text-fog mb-5">
          So, you want to travel to
        </h5>
        <h1 className="font-serif text-7xl md:text-12xl uppercase leading-none mb-7">
          Space
        </h1>
        <p className="leading-relaxed text-[0.8375rem] md:text-base text-fog mb-20 md:mb-36 xm:mb-11 xm:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <button
          name="start exploration"
          className="font-serif uppercase text-xl text-cinder h-[9.38rem] md:h-[15.13rem] bg-white aspect-square flex items-center justify-center rounded-full mx-auto hover:ring-white/10 transition-shadow hover:ring-15 md:hover:ring-20 xm:hidden "
          type="button"
          onClick={startExplorationHandler}
        >
          explore
        </button>
      </article>
    </main>
  )
}

export default Home
