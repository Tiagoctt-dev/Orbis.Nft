import { X, GitFork, Mail, ChevronRight } from 'lucide-react'
import { ABOUT_TEXT } from '../components/shared'

const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
const ABOUT_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
const CTA_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb79-de6ccb5ecdb0.mp4"

const NFT_CARDS = [
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4", score: "8.7/10" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4", score: "9/10" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4", score: "8.2/10" },
]

function SocialStack() {
  return (
    <div className="flex flex-col gap-3">
      {[Mail, X, GitFork].map((Icon, i) => (
        <button key={i} className="liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Icon size={20} className="text-cream" />
        </button>
      ))}
    </div>
  )
}

function SocialVertical() {
  return (
    <div className="liquid-glass rounded-[0.5rem] sm:rounded-[0.75rem] lg:rounded-[1.25rem] flex flex-col">
      {[Mail, X, GitFork].map((Icon, i) => (
        <button
          key={i}
          className={`flex items-center justify-center w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] aspect-square hover:bg-white/10 transition-colors ${i < 2 ? 'border-b border-white/10' : ''}`}
        >
          <Icon size={20} className="text-cream" />
        </button>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-screen rounded-b-[32px] overflow-hidden">
        <video src={HERO_VIDEO} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col min-h-screen">
          <div className="flex-1 flex flex-col justify-center lg:justify-end pb-16 lg:pb-24">
            <div className="relative lg:ml-32 max-w-[780px]">
              <h1 className="font-[Anton] text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] lg:leading-[1] text-cream">
                Além da terra<br />
                e ( de suas ) fronteiras<br />
                familiares
              </h1>
              <span
                className="font-[Condiment] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-neon opacity-90 absolute -right-4 sm:right-0 top-2 -rotate-1 pointer-events-none select-none"
                style={{ mixBlendMode: 'exclusion' }}
              >
                Coleção Nft
              </span>
            </div>
            <div className="flex lg:hidden justify-center mt-10 gap-3 flex-row">
              {[Mail, X, GitFork].map((Icon, i) => (
                <button key={i} className="liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon size={20} className="text-cream" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-8 right-4 sm:right-8 lg:right-12 z-10 hidden lg:flex">
          <SocialStack />
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <video src={ABOUT_VIDEO} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-24 flex flex-col justify-between min-h-screen">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="relative">
              <h2 className="font-[Anton] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-cream leading-none">
                Olá!<br />Eu sou orbis
              </h2>
              <span
                className="font-[Condiment] text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] text-neon absolute bottom-0 right-0 translate-y-1/4 -rotate-2 pointer-events-none select-none"
                style={{ mixBlendMode: 'exclusion' }}
              >
                Orbis
              </span>
            </div>
            <p className="font-mono text-[14px] sm:text-[16px] uppercase text-cream max-w-[266px]">{ABOUT_TEXT}</p>
          </div>
          <div className="flex flex-row justify-between mt-auto pt-16">
            <div className="flex flex-col gap-4 max-w-[266px]">
              <p className="font-mono text-[14px] uppercase text-cream opacity-10">{ABOUT_TEXT}</p>
              <p className="font-mono text-[14px] uppercase text-cream opacity-10">{ABOUT_TEXT}</p>
            </div>
            <div className="hidden lg:flex flex-col gap-4 max-w-[266px]">
              <p className="font-mono text-[14px] uppercase text-cream opacity-10">{ABOUT_TEXT}</p>
              <p className="font-mono text-[14px] uppercase text-cream opacity-10">{ABOUT_TEXT}</p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="bg-[#010828] w-full py-16 lg:py-24">
        <div className="max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-10">
            <div>
              <h2 className="font-[Anton] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-cream leading-none">
                Coleção de
              </h2>
              <div className="ml-12 md:ml-24 lg:ml-32 flex items-baseline gap-2">
                <span className="font-[Condiment] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-neon">Objetos</span>
                <span className="font-[Anton] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-cream leading-none">espaciais</span>
              </div>
            </div>
            <div className="flex flex-col items-start cursor-pointer group">
              <div className="flex items-baseline gap-2">
                <span className="font-[Anton] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-cream leading-none">VER</span>
                <div className="flex flex-col leading-none">
                  <span className="font-[Anton] text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase text-cream">TODOS</span>
                  <span className="font-[Anton] text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase text-cream">CRIADORES</span>
                </div>
              </div>
              <div className="bg-neon w-full h-[6px] sm:h-[8px] lg:h-[10px] mt-1 group-hover:opacity-80 transition-opacity" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NFT_CARDS.map((card, i) => (
              <div key={i} className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors">
                <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden">
                  <video src={card.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-cream/70 uppercase font-[Anton] tracking-wide">Índice de raridade:</p>
                        <p className="text-[16px] text-cream font-[Anton]">{card.score}</p>
                      </div>
                      <button className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform flex-shrink-0">
                        <ChevronRight size={20} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]">
        <video src={CTA_VIDEO} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] px-6 sm:px-10">
          <div className="text-right relative">
            <span
              className="font-[Condiment] text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px] text-neon absolute -top-8 sm:-top-12 lg:-top-16 left-0"
              style={{ mixBlendMode: 'exclusion' }}
            >
              Vá além
            </span>
            <h2 className="font-[Anton] text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] uppercase text-cream leading-none">
              <span className="block mb-4 sm:mb-6 md:mb-8 lg:mb-12">JUNTE-SE A NÓS.</span>
              <span className="block">REVELE O QUE ESTÁ OCULTO.</span>
              <span className="block">DEFINA O QUE VEM A SEGUIR.</span>
              <span className="block">SIGA O SINAL.</span>
            </h2>
          </div>
        </div>
        <div className="absolute left-[8%] bottom-[12%] sm:bottom-[14%] lg:bottom-[20%]">
          <SocialVertical />
        </div>
      </section>
    </>
  )
}
