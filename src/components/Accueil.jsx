function Accueil() {
  return (
    <div id="accueil" className="min-h-[95vh] flex flex-col">
      <div className="h-[4vh]"></div>
      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <p className="font-fira text-base-100">Hello there ! Je suis</p>
          <div className="flex flex-col gap-1 font-josefin font-bold  md:text-6xl text-4xl">
            <h1 className="text-accent-focus">Cardonnel Samuel</h1>
            <h2 className="text-accent">
              Je met toujours le coeur à l'ouvrage
            </h2>
          </div>
          <div className="font-fira text-base-100">
            <p>Actuellement développeur JS / React</p>
            <p>En formation pour devenir votre DevOps</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accueil
