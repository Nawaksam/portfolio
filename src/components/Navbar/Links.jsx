import IconContact from "../Icons/IconContact"
import IconCv from "../Icons/IconCv"
import IconProject from "../Icons/IconProject"

function DesktopLinks() {
  return (
    <>
      <ul className="flex gap-8">
        <li>
          <a href="#experiences" className="flex items-center gap-2">
            <IconCv color="hsl(var(--a))" size="4vh" />
            <p className="md:flex hidden">Expériences</p>
          </a>
        </li>
        <li>
          <a href="#realisations" className="flex items-center gap-2">
            <IconProject color="hsl(var(--a))" size="4vh" />
            <p className="md:flex hidden">Réalisations</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="flex items-center gap-2">
            <IconContact color="hsl(var(--a))" size="4vh" />
            <p className="md:flex hidden">Contact</p>
          </a>
        </li>
      </ul>
    </>
  )
}

export default DesktopLinks
