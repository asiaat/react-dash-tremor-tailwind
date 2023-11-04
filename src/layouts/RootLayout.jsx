
import { Outlet } from "react-router-dom"

// components

import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
    <div className="grid grid-cols-6 bg-gray-50">

      {/* Põhisisu ja navigeerimisriba */}
      <div className="col-span-6 lg:col-span-4 xl:col-span-6 p-5">
        <Navbar />
        <Outlet />
      
      </div>

    </div>
  )
}
