import linkedin from "../assets/linkedin.svg"
import email from "../assets/email.svg"
import whatsapp from "../assets/whatsapp.svg"
import git from "../assets/github.svg"
import calendar from "../assets/calendar.svg"
export default function Contact (){

    return(
        <div className="flex flex-col gap-10 justify-center items-center p-6">
      <div className="w-full max-w-xl h-auto flex flex-col items-center justify-center gap-10 p-6">
        <h1 className="font-manrope font-extrabold text-2xl sm:text-3xl text-center">
          <span>con</span><span className="underline underline-offset-4 decoration-2 sm:underline-offset-[12px] sm:decoration-[6px]">tate-</span><span>me</span>
        </h1>
        <div className="flex gap-6 sm:gap-20">
          <a target="_blank" href="https://www.linkedin.com/in/victorppalma/">
            <img className="w-8 h-8 sm:w-9 sm:h-9 transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-125 hover:duration-300" src={linkedin} alt=""/>
          </a>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=5511990077094&text=Ola Victor! Gostaria de falar com você sobre trabalho. Estou disponivel para conversar. Obrigado!">
            <img className="w-8 h-8 sm:w-9 sm:h-9 transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-125 hover:duration-300" src={whatsapp} alt=""/>
          </a>
          <a target="_blank" href="https://github.com/victorclapz/">
            <img className="w-8 h-8 sm:w-9 sm:h-9 transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-125 hover:duration-300" src={git} alt=""/>
          </a>
          <a target="_blank" href="mailto:victorpalmadev@gmail.com">
            <img className="w-8 h-8 sm:w-9 sm:h-9 transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-125 hover:duration-300" src={email} alt=""/>
          </a>
          <a target="_blank" href="https://calendar.app.google/wRboaU4uZL9Fsb7F9">
            <img className="w-8 h-8 sm:w-9 sm:h-9 transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-125 hover:duration-300" src={calendar} alt=""/>
          </a>
        </div>
      </div>
      <div className="w-full max-w-5xl h-auto flex justify-between items-center font-manrope p-6">
        <h1 className="font-extrabold text-2xl sm:text-3xl">clapz.</h1>
        <p className="font-thin text-sm sm:text-base">coded by <span className="font-semibold">me</span></p>
      </div>
    </div>
        

    )
}