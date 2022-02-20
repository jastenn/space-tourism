import { dirname, join } from "path"
import { readFile } from "fs/promises"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

import React, { useState, Fragment, useContext } from "react"
import type { Destination } from "../types"

import Image from "next/image"

import { Tab, Transition } from "@headlessui/react"
import { GetStaticProps, NextPage } from "next"
import { DestinationContext } from "../context/DestinationContextProvider"
import { useRouter } from "next/router"

interface destinationProps {
  destinations: Destination[]
}

const Destination: NextPage<destinationProps> = ({ destinations }) => {
  const router = useRouter()
  const { destination, setDestination } = useContext(DestinationContext)

  const tabChangeHandler = (idx: number) => {
    if (!setDestination) return
    const destName = destinations[idx].name

    router.replace("/destination?destination=" + destName)
    setDestination({
      idx,
      name: destName,
    })
  }
  return (
    <main className="w-full">
      <article className="text-center mb-14 xm:text-left md:mb-0">
        <h3 className="font-sans-condensed uppercase tracking-widest flex items-baseline justify-center mb-8 md:text-xl md:justify-start md:mt-10 md:mb-14">
          <span
            aria-hidden
            className="font-bold block text-white/25 mr-[1.125rem]"
          >
            01
          </span>{" "}
          Pick your destination
        </h3>
        <div className="xm:flex xm:gap-14 justify-between items-center">
          <div className="aspect-square w-[10.625rem] relative mx-auto mb-6  md:w-[18.75rem] md:mb-14 xm:w-[23.81rem] xm:flex-shrink-0 xm:items-center lg:w-[27.81rem]">
            <Image
              src={destinations[destination.idx].images.png}
              alt={destinations[destination.idx].name}
              layout="fill"
            />
          </div>
          <div className="xm:max-w-[27.81rem]">
            <Tab.Group onChange={tabChangeHandler}>
              <Tab.List className="mb-5 flex justify-center gap-6 xm:justify-start">
                {destinations.map((destination) => (
                  <Tab as={Fragment} key={destination.name}>
                    {({ selected }) => (
                      <button className="group">
                        <span
                          className={`font-sans-condensed block text-sm md:text-base uppercase tracking-widest mb-2 ${
                            selected ? "text-white" : "text-fog"
                          }`}
                        >
                          {destination.name}
                        </span>
                        <span
                          className={`group-hover:bg-white/50 group-focus:bg-white/50 w-full block h-[3px] transition-colors motion-reduce:!transition-none ${
                            selected ? "!bg-white" : "bg-transparent"
                          }`}
                        ></span>
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {destinations.map((destination) => (
                  <Tab.Panel
                    className="max-w-[35.81rem] mx-auto"
                    key={destination.name}
                  >
                    <div>
                      <h1 className="font-serif uppercase text-5xl leading-tight md:text-7xl xm:text-8xl">
                        {destination.name}
                      </h1>
                      <p className="text-fog text-[0.9375rem] leading-relaxed md:text-base xm:text-lg">
                        {destination.description}
                      </p>
                    </div>
                    <hr className="my-8 opacity-25 md:mt-12 md:mb-7 xm:mt-14" />
                    <div className="md:flex md:gap-24 justify-center xm:justify-start">
                      <p className="font-serif text-3xl uppercase mb-8">
                        <span className="block font-sans-condensed text-fog text-sm uppercase mb-3">
                          AVG. Distance
                        </span>
                        {destination.distance}
                      </p>
                      <p className="font-serif text-3xl uppercase">
                        <span className="block font-sans-condensed text-fog text-sm uppercase mb-3">
                          EST. Travel time
                        </span>
                        {destination.travel}
                      </p>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </article>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await readFile(join(__dirname, "..", "data.json"))

  const data = await JSON.parse(res.toString()).destinations

  return {
    props: {
      destinations: data,
    },
  }
}
export default Destination

/**
 * if(currentIdx > nextIdx) {
 *  Slide from Left to Right
 * } else  {
 *  Slide from Right to left
 * }
 *
 */
