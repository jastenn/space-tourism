import React, { Fragment, useState } from "react"
import { GetStaticProps, NextPage } from "next/types"
import type { Technology } from "../types"

import getData from "../utils/getData"
import useScreenLarge from "../hooks/useScreenLarge"
import useDisableScrollOnArrow from "../hooks/useDisableScrollOnArrow"

import { Tab } from "@headlessui/react"
import Image from "next/image"

interface TechnologyProps {
  technologies: Technology[]
}

const Technology: NextPage<TechnologyProps> = ({ technologies }) => {
  useDisableScrollOnArrow()
  const { isScreenLarge } = useScreenLarge()
  const [selectedTab, setSelectedTab] = useState(0)

  const changeTabHandler = (index: number) => {
    setSelectedTab(index)
  }
  return (
    <main className="w-full">
      <article className="text-center mb-14 xm:text-left md:mb-0">
        <h3 className="font-sans-condensed uppercase tracking-widest flex items-baseline justify-center mb-8 md:text-xl md:justify-start md:mt-10 md:mb-15">
          <span
            aria-hidden
            className="font-bold block text-white/25 mr-[1.125rem]"
          >
            03
          </span>{" "}
          Space Launch 101
        </h3>
        <div className="xm:flex xm:justify-between xm:items-center xm:flex-row-reverse">
          <div className="-ml-[8%] -mr-[8.3%] relative h-[45vw] mb-8 md:mb-14 xm:m-0 xm:w-2/5 xm:max-w-[32.19rem] xm:h-[unset] xm:aspect-square xm:mr-[-8%]">
            {/* to provide different image orientation on certain screen size */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              className="w-full xm:hidden"
              key={technologies[selectedTab].name + "-landscape"}
              src={technologies[selectedTab].images.landscape}
              alt={technologies[selectedTab].name}
              layout="fill"
              objectFit="cover"
            />
            <Image
              className="hidden xm:block"
              key={technologies[selectedTab].name + "-portrait"}
              src={technologies[selectedTab].images.portrait}
              alt={technologies[selectedTab].name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="xm:flex xm:w-7/12 xm:justify-between xm:gap-10 lg:gap-20">
            <Tab.Group
              vertical={isScreenLarge ? true : undefined}
              onChange={setSelectedTab}
            >
              <Tab.List className="flex justify-center gap-4 mb-6 md:mb-11 xm:flex-col items-center">
                {technologies.map((technology, i) => (
                  <Tab as={Fragment} key={technology.name}>
                    {({ selected }) => (
                      <button
                        className={`aspect-square h-10 font-serif rounded-full text-base md:h-15 xm:h-16 lg:h-20 ${
                          selected
                            ? "bg-white text-cinder"
                            : "ring-1 ring-inset ring-white/20 text-white"
                        }`}
                      >
                        {i + 1}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="max-w-[28.63rem] mx-auto xm:mx-0">
                {technologies.map((technology) => (
                  <Tab.Panel key={technology.name}>
                    <p className="font-sans-condensed text-fog uppercase text-sm tracking-widest mb-1 md:text-base md:mb-4">
                      The Terminology...
                    </p>
                    <h1 className="font-serif text-white uppercase text-2xl mb-2 md:text-[2.5rem] md:mb-4">
                      {technology.name}
                    </h1>
                    <p className="text-fog text-[.9375rem] leading-relaxed md:text-base md:leading-relaxed">
                      {technology.description}
                    </p>
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
  const data = await getData()

  return {
    props: {
      technologies: data.technology,
    },
  }
}

export default Technology
