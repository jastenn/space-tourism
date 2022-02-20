import React, { Fragment, useState } from "react"
import { GetStaticProps } from "next/types"

import getData from "../utils/getData"
import { Crew } from "../types"
import { Tab } from "@headlessui/react"
import Image from "next/image"

interface CrewProps {
  crews: Crew[]
}
const Crew = ({ crews }: CrewProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0)

  const tabChangeHandler = (idx: number) => {
    setSelectedIdx(idx)
  }

  return (
    <main className="w-full">
      <article className="text-center mb-14 xm:text-left md:mb-0">
        <h3 className="font-sans-condensed uppercase tracking-widest flex items-baseline justify-center mb-8 md:text-xl md:justify-start md:mt-10 md:mb-15">
          <span
            aria-hidden
            className="font-bold block text-white/25 mr-[1.125rem]"
          >
            02
          </span>{" "}
          Meet your crew
        </h3>
        <div className="md:flex flex-col">
          <div className="relative h-56 w-full mb-8 after:content-[''] after:w-full after:h-[1px] after:bg-white/20 after:absolute after:bottom-0 after:inset-x-0 md:order-3 md:after:hidden md:mb-0 md:h-[33.25rem]">
            <Image
              src={crews[selectedIdx].images.png}
              layout="fill"
              objectFit="contain"
              alt={crews[selectedIdx].name}
            />
          </div>
          <Tab.Group onChange={tabChangeHandler}>
            <Tab.List className="flex gap-4 justify-center mb-8 md:order-2 md:mb-10">
              {crews.map((crew) => (
                <Tab key={crew.name} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`
                    ${selected ? "bg-white" : "bg-white/20"}
                    aspect-square h-[10px]  rounded-full
                    hover:bg-white/50 transition-colors
                    `}
                    >
                      <div className="sr-only">{crew.name}</div>
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mb-8">
              {crews.map((crew) => (
                <Tab.Panel key={crew.name}>
                  <div
                    aria-label="role"
                    className="font-serif uppercase text-white/50 mb-2 md:text-2xl"
                  >
                    {crew.role}
                  </div>
                  <h1 className="font-serif text-3xl uppercase mb-4 md:text-[2.5rem]">
                    {crew.name}
                  </h1>
                  <p className="text-fog text-[.9375rem] md:text-base">
                    {crew.bio}
                  </p>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </article>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData()

  return {
    props: {
      crews: data.crew,
    },
  }
}

export default Crew
