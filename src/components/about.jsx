import img from "../assets/FotoPerfil.png";
import iconeD from "../assets/icone-desing.svg";
import iconeL from "../assets/icone-layout.svg";
import iconeT from "../assets/icone-three.svg";

export default function About() {
  return (
    <div className="flex flex-col">
      <h2 className="pl-4 pt-10 pb-10 text-2xl sm:pl-[152px] sm:pt-[160px] sm:pb-20 font-manrope font-extrabold">
        <span className="underline underline-offset-4 decoration-2 sm:underline-offset-[12px] sm:decoration-[6px]">
          sobre
        </span>
        <span> mim</span>
      </h2>
      <div className="flex flex-col items-center gap-8 sm:gap-[101px] p-4">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-[52px]">
          <div className="flex justify-center">
            <img className="w-24 h-24 sm:w-[200px] sm:h-[200px] rounded-full" src={img} alt="Victor Palma" />
          </div>
          <div className="flex flex-col font-manrope gap-3">
            <h1 className="text-xl sm:text-3xl font-normal p-3">Victor Palma</h1>
            <p className="text-sm sm:text-base p-3 font-extralight max-w-xs sm:max-w-lg">
              Sou um desenvolvedor frontend apaixonado por criar experiências digitais intuitivas e envolventes. Dedico-me
              a construir interfaces de usuário modernas, responsivas e acessíveis. Minha jornada na programação começou
              por curiosidade, mas rapidamente se transformou em uma paixão. Adoro enfrentar desafios e encontrar
              soluções criativas para problemas complexos. Meu objetivo é sempre entregar produtos que não só atendam às
              necessidades dos usuários, mas que também ofereçam uma experiência memorável.
            </p>
            <div className="flex gap-3">
              <a
                className="p-2 text-xs sm:text-sm transition ease-in-out delay-50 hover:underline hover:-translate-y-0.5 hover:scale-105 hover:duration-200"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5511990077094&text=Ola Victor! Gostaria de falar com você sobre trabalho. Estou disponivel para conversar. Obrigado!"
                rel="noreferrer"
              >
                WHATSAPP
              </a>
              <a
                className="p-2 text-xs sm:text-sm transition ease-in-out delay-50 hover:underline hover:-translate-y-0.5 hover:scale-105 hover:duration-200"
                target="_blank"
                href="https://github.com/victorclapz/"
                rel="noreferrer"
              >
                GITHUB
              </a>
              <a
                className="p-2 text-xs sm:text-sm transition ease-in-out delay-50 hover:underline hover:-translate-y-0.5 hover:scale-105 hover:duration-200"
                target="_blank"
                href="mailto:victorpalmadev@gmail.com"
                rel="noreferrer"
              >
                EMAIL
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-4 sm:gap-[34px] font-manrope lg:flex-row">
          <div className="w-full sm:w-[278px] h-auto p-4 rounded-xl border border-p-2 flex items-center transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:duration-200">
            <img className="w-8 h-8 sm:w-[30px] sm:h-[30px] m-2 sm:m-[20px]" src={iconeD} alt="Interface & Design" />
            <span className="hidden sm:block text-5xl font-extralight text-slate-100">|</span>
            <div className="ml-2 sm:ml-[10px] font-manrope">
              <p className="font-extrabold text-xs sm:text-base">Interface & Design</p>
              <p className="text-xs">Briefing, wireframe, UX, UI e branding.</p>
            </div>
          </div>
          <div className="w-full sm:w-[278px] h-auto p-4 rounded-xl border border-p-2 flex items-center transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:duration-200">
            <img className="w-8 h-8 sm:w-[30px] sm:h-[30px] m-2 sm:m-[20px]" src={iconeL} alt="HTML & CSS" />
            <span className="hidden sm:block text-5xl font-extralight text-slate-100">|</span>
            <div className="ml-2 sm:ml-[10px]">
              <p className="font-extrabold text-xs sm:text-base">HTML & CSS</p>
              <p className="text-xs">Sites responsivos e performáticos</p>
            </div>
          </div>
          <div className="w-full sm:w-[278px] h-auto p-4 rounded-xl border border-p-2 flex items-center transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:duration-200">
            <img className="w-8 h-8 sm:w-[30px] sm:h-[30px] m-2 sm:m-[20px]" src={iconeT} alt="React.js" />
            <span className="hidden sm:block text-5xl font-extralight text-slate-100">|</span>
            <div className="ml-2 sm:ml-[10px]">
              <p className="font-extrabold text-xs sm:text-base">React.js</p>
              <p className="text-xs">Construa seus sistemas com React</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-4 sm:gap-[46px] font-manrope">
          <div className="w-full sm:w-[374px] h-auto p-4 rounded-xl border border-p-2 flex transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:duration-200">
            <div className="m-6 border-l-2">
              <p className="ml-4 font-extrabold text-base">Tenho experiências com</p>
              <p className="ml-4 mt-2 font-thin text-sm">GIT, GitHub</p>
              <p className="ml-4 mt-2 font-thin text-sm">Coding JavaScript</p>
              <p className="ml-4 mt-2 font-thin text-sm">CSS Preprocessors</p>
              <p className="ml-4 mt-2 font-thin text-sm">Axios</p>
              <p className="ml-4 mt-2 font-thin text-sm">APIs REST</p>
              <p className="ml-4 mt-2 font-thin text-sm">Layouts responsivos</p>
            </div>
          </div>
          <div className="w-full sm:w-[374px] h-auto p-4 rounded-xl border border-p-2 flex transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:duration-200">
            <div className="m-6 border-l-2">
              <p className="ml-4 font-extrabold text-base">Trabalho com</p>
              <p className="ml-4 mt-2 font-thin text-sm">Coding React.js</p>
              <p className="ml-4 mt-2 font-thin text-sm">TAILWIND</p>
              <p className="ml-4 mt-2 font-thin text-sm">SASS</p>
              <p className="ml-4 mt-2 font-thin text-sm">Next.js</p>
              <p className="ml-4 mt-2 font-thin text-sm">Microfrontend</p>
              <p className="ml-4 mt-2 font-thin text-sm">Docker</p>
            </div>
          </div>
          <div className="w-full sm:w-[374px] h-auto p-4 rounded-xl border border-p-2 flex transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:duration-200">
            <div className="m-6 border-l-2">
              <p className="ml-4 font-extrabold text-base">Estudo sobre</p>
              <p className="ml-4 mt-2 font-thin text-sm">Arquitetura</p>
              <p className="ml-4 mt-2 font-thin text-sm">Microservices/Microdatabase</p>
              <p className="ml-4 mt-2 font-thin text-sm">CLOUD / AWS</p>
              <p className="ml-4 mt-2 font-thin text-sm">Performance de Aplicações Web</p>
              <p className="ml-4 mt-2 font-thin text-sm">UX/UI Design</p>
              <p className="ml-4 mt-2 font-thin text-sm">Comunicação e Performance pessoal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
