function Experiences() {
  return (
    <div id="experiences" className="min-h-[95vh] flex flex-col">
      <div className="h-[8vh]"></div>
      <div className="flex-grow flex flex-col rounded-3xl bg-base-100 bg-opacity-10">
        <div className="p-4 flex  gap-8">
          <img
            src="/avatar.png"
            alt="photo de profil"
            className="rounded-3xl h-24"
          />
          <div className="flex flex-col justify-evenly font-josefin font-bold text-accent text-3xl">
            <h2>Samuel</h2>
            <h2>Cardonnel</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 py-2 border-t-2 border-accent border-opacity-20 font-fira text-base-100 text-justify text-sm ">
          <p>
            Agé de 30 ans et Chiropracteur de formation, j'effectue une
            reconversion dans le secteur du digital qui me passionne depuis
            l'enfance.
          </p>
          <p>Je suis formé à l’usage des technos JavaScript et React.</p>
          <p>Actuellement en formation sur la gestion d’Infrastructures.</p>
          <p>
            Je m’intérèsse fortement à la culture DevOps, avec pour but de
            devenir votre SRE.
          </p>
        </div>
        <div className="flex flex-col gap-2 px-4 py-2 border-t-2 border-accent border-opacity-20 font-fira text-base-200 text-justify text-sm ">
          <div>
            <h3 className="font-bold text-accent">Langues :</h3>
            <ul className="flex flex-col gap-0.5 ml-4 mb-1 list-square">
              <li>
                <span className="text-base-100">Français</span>, langue
                maternelle
              </li>
              <li>
                <span className="text-base-100">Anglais</span>, niveau C2
              </li>
              <li>
                <span className="text-base-100">Espagnol</span>, niveau B1
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-accent">Technos :</h3>
            <ul className="grid grid-cols-3 gap-0.5 ml-4 mb-1 list-square">
              <li>React</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-accent">Outils :</h3>
            <ul className="grid grid-cols-3 gap-0.5 ml-4 mb-1 list-square">
              <li>VSCode</li>
              <li>Ubuntu</li>
              <li>Git</li>
              <li>WSL 2</li>
              <li>Docker</li>
              <li>Unraid</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 py-2 border-t-2 border-accent border-opacity-20 font-fira text-base-200 text-justify text-sm ">
          <h3 className="font-bold text-accent">Diplômes</h3>
          <ul className="list-disc pl-3 flex flex-col gap-2 border-l-2 border-accent border-opacity-20 py-2 text-base-100">
            <li>
              Développeur Web & Web Mobile
              <br />
              <span className="text-base-300">2023 - Wild Code School</span>
            </li>
            <li>
              Chiropracteur
              <br />
              <span className="text-base-300">2018 - IFEC Toulouse</span>
            </li>
            <li>
              Bac en Sciences de Laboratoire
              <br />
              <span className="text-base-300">
                2010 - Lycée Antoine Bourdelle
              </span>
            </li>
            <li>
              Jeune Sapeur Pompier
              <br />
              <span className="text-base-300">2009 - SDIS 82</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 px-4 py-2 border-t-2 border-accent border-opacity-20 font-fira text-base-200 text-sm ">
          <h3 className="font-bold text-accent">Expériences</h3>
          <ul className="list-disc pl-3 flex flex-col gap-4 border-l-2 border-accent border-opacity-20 py-2">
            <li>
              <h4 className="text-lg font-bold text-base-100">
                Ouvrier du bâtiment
              </h4>
              <p className="font-bold text-base-300">
                2022 à 2023 - HRJ Bâtiments
              </p>
              <p className="text-base-100">
                Pose de gaines de désenfumage, placo, isolation, ...
              </p>
              <ul className="flex flex-wrap gap-1 mt-2">
                <li className="badge  badge-accent">
                  Coordination des corps de métier
                </li>
                <li className="badge  badge-accent">Endurance</li>
                <li className="badge  badge-accent">Persévérance</li>
                <li className="badge  badge-accent">Adaptabilité</li>
              </ul>
            </li>
            <li>
              <h4 className="text-lg font-bold text-base-100">Chiropracteur</h4>
              <p className="font-bold text-base-300">
                2018 à 2022 - Auto entrepreneur
              </p>
              <p className="text-base-100">
                Gestion en autonomie totale d'une entreprise, collaboration,
                remplacements, traitement et suivi des patients, ...
              </p>
              <ul className="flex flex-wrap gap-1 mt-2">
                <li className="badge  badge-accent">Communication</li>
                <li className="badge  badge-accent">Écoute</li>
                <li className="badge  badge-accent">Empathie</li>
                <li className="badge  badge-accent">Analyse</li>
                <li className="badge  badge-accent">Diagnostic</li>
                <li className="badge  badge-accent">Traitement</li>
                <li className="badge  badge-accent">Administratif</li>
                <li className="badge  badge-accent">Secrétariat</li>
              </ul>
            </li>
            <li>
              <h4 className="text-lg  font-bold text-base-100">
                Vendeur multimédia
              </h4>
              <p className="font-bold text-base-300">
                2013 à 2018 - Darty Portet
              </p>
              <p className="text-base-100">
                Découverte du besoin client pour définir une solution adaptée,
                gestion de stock, ...
              </p>
              <ul className="flex flex-wrap gap-1 mt-2">
                <li className="badge  badge-accent">Travail d'équipe</li>
                <li className="badge  badge-accent">Veille techno.</li>
                <li className="badge  badge-accent">
                  Programmation Neuro-Linguistique
                </li>
                <li className="badge  badge-accent">Techniques de vente</li>
              </ul>
            </li>
            <li>
              <h4 className="text-lg  font-bold text-base-100">
                Vendeur en boulangerie
              </h4>
              <p className="font-bold text-base-300 mb-1">
                2010 à 2018 - Boulangerie Cardonnel
              </p>
              <p className="text-base-200">
                Préparation de commandes, livraisons, mise en rayon, vente,
                conseil, nettoyage, compte des recettes, ...
              </p>
              <ul className="flex flex-wrap gap-1 mt-2">
                <li className="badge  badge-accent">Relationnel</li>
                <li className="badge  badge-accent">Fiabilité</li>
                <li className="badge  badge-accent">Autonomie</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experiences
