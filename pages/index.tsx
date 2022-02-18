import type { NextPage } from "next"
import Head from "next/head"

import Navigation from "../components/Navigation"

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <h1 className="font-bold text-lg">Test</h1>
    </div>
  )
}

export default Home
