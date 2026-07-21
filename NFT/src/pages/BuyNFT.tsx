import { useState } from 'react'
import { ChevronRight, Check } from 'lucide-react'

const FEATURED = [
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4", name: "Orbis #002", tag: "Lendário", score: "9/10", price: "2.4 ETH", usd: "$8.120" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4", name: "Orbis #009", tag: "Épico", score: "9.1/10", price: "1.8 ETH", usd: "$6.090" },
  { video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4", name: "Orbis #001", tag: "Raro", score: "8.7/10", price: "0.9 ETH", usd: "$3.042" },
]

const PERKS = [
  "Acesso exclusivo à Orbis DAO",
  "Certificado impresso físico de propriedade",
  "Acesso antecipado a lançamentos futuros",
  "Discord privado e eventos",
]

export default function BuyNFT() {
  const [selected, setSelected] = useState(0)
  const [bought, setBought] = useState(false)

  const nft = FEATURED[selected]

  return (
    <div className="min-h-screen bg-[#010828] text-cream pt-24 pb-32 lg:pb-16">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-[Anton] text-[40px] sm:text-[56px] lg:text-[72px] uppercase leading-none text-cream mb-2">
            Comprar NFT
          </h1>
          <span className="font-[Condiment] text-[28px] sm:text-[40px] text-neon">
            Tenha um pedaço do espaço
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — NFT preview + selector */}
          <div className="flex flex-col gap-6">
            {/* Main preview */}
            <div className="liquid-glass rounded-[32px] p-[18px]">
              <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden">
                <video
                  key={nft.video}
                  src={nft.video}
                  autoPlay loop muted playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="liquid-glass font-[Anton] text-[10px] uppercase px-3 py-1 rounded-full text-neon">
                    {nft.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {FEATURED.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`relative flex-1 pb-[33%] rounded-[16px] overflow-hidden border-2 transition-all ${selected === i ? 'border-neon' : 'border-transparent hover:border-white/30'}`}
                >
                  <video
                    src={item.video}
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right — purchase panel */}
          <div className="flex flex-col gap-6">
            <div className="liquid-glass rounded-[32px] p-8 flex flex-col gap-6">
              <div>
                <p className="font-[Anton] text-[13px] uppercase text-cream/50 mb-1">Selecionado</p>
                <h2 className="font-[Anton] text-[36px] sm:text-[48px] uppercase leading-none text-cream">{nft.name}</h2>
                <p className="font-mono text-[13px] uppercase text-cream/50 mt-1">Índice de raridade: {nft.score}</p>
              </div>

              {/* Price */}
              <div className="border-t border-white/10 pt-6">
                <p className="font-[Anton] text-[13px] uppercase text-cream/50 mb-1">Preço atual</p>
                <div className="flex items-baseline gap-3">
                  <span className="font-[Anton] text-[48px] text-neon leading-none">{nft.price}</span>
                  <span className="font-mono text-[14px] text-cream/40">{nft.usd}</span>
                </div>
              </div>

              {/* Perks */}
              <div className="border-t border-white/10 pt-6">
                <p className="font-[Anton] text-[13px] uppercase text-cream/50 mb-4">Incluído na compra</p>
                <ul className="flex flex-col gap-3">
                  {PERKS.map((perk, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-neon/20 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-neon" />
                      </span>
                      <span className="font-mono text-[13px] text-cream/70 uppercase">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              {bought ? (
                <div className="rounded-[16px] bg-neon/10 border border-neon px-6 py-5 text-center">
                  <p className="font-[Anton] text-[20px] uppercase text-neon">Compra confirmada!</p>
                  <p className="font-mono text-[12px] text-cream/50 uppercase mt-1">Transação pendente on-chain</p>
                </div>
              ) : (
                <button
                  onClick={() => setBought(true)}
                  className="w-full flex items-center justify-between rounded-[16px] bg-gradient-to-br from-[#b724ff] to-[#7c3aed] px-6 py-5 shadow-lg shadow-purple-500/30 hover:opacity-90 transition-opacity"
                >
                  <span className="font-[Anton] text-[20px] uppercase text-white">Comprar agora</span>
                  <ChevronRight size={24} className="text-white" />
                </button>
              )}
            </div>

            {/* Note */}
            <p className="font-mono text-[11px] text-cream/30 uppercase text-center leading-relaxed">
              As transações são finais. Ao comprar, você concorda com os termos de serviço da Orbis.Nft.
              Todos os preços estão em ETH e sujeitos a flutuações de mercado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
