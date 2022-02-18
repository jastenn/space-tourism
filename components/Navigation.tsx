import React, { FC, Fragment, useEffect, useRef, useState } from "react"

import minTwoDigitInt from "../utils/minTwoDigitInt"

import Link from "next/link"

import IconClose from "../assets/svg/icon-close.svg"
import IconMenu from "../assets/svg/icon-hamburger.svg"
import Logo from "../assets/svg/logo.svg"
import { useRouter } from "next/router"
import { Menu, Transition } from "@headlessui/react"
import { useFocusWithin } from "@react-aria/interactions"

interface NavigationProps {
  navItems?: NavItem[]
}

interface NavItem {
  url: string
  name: string
}

const defaultNavItems: NavItem[] = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/destination",
    name: "Destination",
  },
  {
    url: "/crew",
    name: "Crew",
  },
  {
    url: "/technology",
    name: "Technology",
  },
]

const Navigation: FC<NavigationProps> = ({ navItems = defaultNavItems }) => {
  const router = useRouter()
  const { focusWithinProps } = useFocusWithin({
    onBlurWithin() {
      toggleNav()
    },
  })

  const [open, setOpen] = useState(false)

  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const getMarkerActiveClass = (href: string) =>
    router.asPath === href ? "!opacity-100" : "opacity-0"

  const toggleNav = () => {
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    if (open) closeBtnRef.current?.focus()
  }, [open])

  return (
    <nav className="w-[87%] max-w-[83rem] mx-auto flex items-center justify-between py-6 md:py-0 xm:mt-6 lg:10">
      <Link href="/" passHref>
        <a className="xm:mr-16">
          <Logo />
        </a>
      </Link>

      {/* decorative el(line on large screen) */}
      <div
        aria-hidden
        className="hidden bg-white/25 h-[2px] w-full relative z-50 xm:block"
      ></div>

      <button
        aria-label="menu"
        className="group md:hidden w-6 relative z-50 focus:outline-none focus:opacity-50 transition-opacity"
        onClickCapture={toggleNav}
      >
        <div
          className={`h-[3px] bg-fog transition-transform ${
            open && "rotate-45 translate-x-0 translate-y-[9px]"
          }`}
        ></div>
        <div
          className={`h-[3px] my-[6px] bg-fog transition-opacity ${
            open && "opacity-0"
          }`}
        ></div>
        <div
          className={`h-[3px] bg-fog transition-transform ${
            open && "-rotate-45 translate-x-0 -translate-y-[9px]"
          }`}
        ></div>
      </button>

      <Transition
        {...focusWithinProps}
        as="div"
        show={open}
        unmount={false}
        className={`${
          open ? "block" : "hidden"
        } absolute z-10 py-8 inset-y-0 w-60 right-0 focus:outline-none motion-reduce:!transition-none md:!block md:inset-[unset] md:p-0 md:relative md:w-[unset]`}
        enter="transition-transform duration-200"
        enterFrom="translate-x-full md:!translate-x-[unset]"
        enterTo="translate-x-0 md:translate-x-[unset]"
        leave="transition-transform !block duration-200"
        leaveTo="translate-x-full md:translate-x-[unset]"
        leaveFrom="translate-x-0 md:!translate-x-[unset]"
      >
        <div
          aria-hidden
          className="absolute glass-bg inset-0 md:right-[unset] md:w-[100rem] xm:-left-10"
        ></div>

        <ul className="flex gap-8 flex-col pl-8 md:flex-row mt-28 md:mt-0 md:gap-9 md:pl-10 xm:ml-7 lg:ml-14 xl:ml-20">
          {navItems.map((navItem, idx) => (
            <li key={navItem.name} className="relative list-none md:py-9">
              <Link href={navItem.url}>
                <a className="peer focus:outline-none font-sans-condensed text-base pl-6 inline-block uppercase tracking-widest md:pl-0 md:text-sm xm:text-base xm:flex">
                  <span
                    className="font-bold absolute left-0 md:hidden xm:block xm:static xm:mr-3"
                    aria-hidden
                  >
                    {minTwoDigitInt(idx)}
                  </span>

                  {navItem.name}
                </a>
              </Link>
              <span
                className={`${getMarkerActiveClass(
                  navItem.url
                )} peer-focus:opacity-50 peer-hover:opacity-50 transition-opacity absolute inset-y-0 w-1 bg-white right-0 md:h-1 md:w-full md:inset-y-[unset] md:inset-x-0 md:bottom-0`}
              ></span>
            </li>
          ))}
        </ul>
      </Transition>
    </nav>
  )
}
export default Navigation
