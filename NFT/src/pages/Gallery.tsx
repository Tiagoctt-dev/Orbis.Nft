import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const ALL_NFTS = [
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4", score: "8.7/10", name: "Orbis #001", tag: "Raro" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4", score: "9/10", name: "Orbis #002", tag: "Lendário" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4", score: "8.2/10", name: "Orbis #003", tag: "Raro" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4", score: "7.5/10", name: "Orbis #004", tag: "Comum" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4", score: "9.4/10", name: "Orbis #005", tag: "Lendário" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4", score: "8.9/10", name: "Orbis #006", tag: "Épico" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4", score: "7.1/10", name: "Orbis #007", tag: "Comum" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4", score: "8.5/10", name: "Orbis #008", tag: "Raro" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4", score: "9.1/10", name: "Orbis #009", tag: "Épico" },
]

const TAGS = ["Todos", "Comum", "Raro", "Épico", "Lendário"]

export default function Gallery() {
  const [active, setActive] = useState("Todos")

  const filtered = active === "Todos" ? ALL_NFTS : ALL_NFTS.filter(n => n.tag === active)

  return (
    <div className="min-h-screen bg-[#010828] text-cream pt-24 pb-32 lg:pb-16">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-[Anton] text-[40px] sm:text-[56px] lg:text-[72px] uppercase leading-none text-cream mb-2">
            Galeria
          </h1>
          <span className="font-[Condiment] text-[28px] sm:text-[40px] text-neon">
            Todos os objetos espaciais
          </span>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-3 flex-wrap mb-10">
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`font-[Anton] text-[12px] uppercase px-5 py-2 rounded-full border transition-all ${
                active === tag
                  ? 'bg-neon text-[#010828] border-neon'
                  : 'border-white/20 text-cream/60 hover:border-neon hover:text-cream'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((nft, i) => (
            <div key={i} className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors group">
              <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden">
                <video
                  src={nft.video}
                  autoPlay loop muted playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Tag badge */}
                <div className="absolute top-3 left-3">
                  <span className="liquid-glass font-[Anton] text-[10px] uppercase px-3 py-1 rounded-full text-neon">
                    {nft.tag}
                  </span>
                </div>
                {/* Overlay bar */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-cream/70 uppercase font-[Anton] tracking-wide">{nft.name}</p>
                      <p className="text-[16px] text-cream font-[Anton]">{nft.score}</p>
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
    </div>
  )
}
