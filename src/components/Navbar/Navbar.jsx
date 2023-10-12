import React from "react"
import Links from "./Links"
import IconEye from "../Icons/IconEye"

function Navbar() {
  return (
    <div className="fixed top-0 w-full max-w-7xl min-h-16 h-[6vh] bg-gradient-to-r from-primary to-secondary  shadow-lg ">
      <div className="min-h-16 h-[6vh] bg-base-100 bg-opacity-10 flex justify-between items-center text-base-100 text-lg md:px-10 px-4 font-fira">
        <a href="#accueil">
          <IconEye
            size="5vh"
            primary="hsl(var(--p))"
            accent="hsl(var(--af))"
            base="hsl(var(--b2))"
          />
        </a>
        <Links />
        <button
          type="button"
          className="btn btn-outline btn-accent btn-square "
        >
          cv
        </button>
      </div>
    </div>
  )
}

export default Navbar
