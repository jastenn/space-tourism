import React from "react"
import { GetStaticProps } from "next/types"

import getData from "../utils/getData"

const Crew = () => {
  return (
    <main className="w-full">
      <article className="text-center mb-14 xm:text-left md:mb-0">
        <h3 className="font-sans-condensed uppercase tracking-widest flex items-baseline justify-center mb-8 md:text-xl md:justify-start md:mt-10 md:mb-14">
          <span
            aria-hidden
            className="font-bold block text-white/25 mr-[1.125rem]"
          >
            02
          </span>{" "}
          Meet your crew
        </h3>
      </article>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData()

  return {
    props: {
      destinations: data.crew,
    },
  }
}

export default Crew
