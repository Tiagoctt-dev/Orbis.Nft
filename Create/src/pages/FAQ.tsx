import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const FAQS = [
  {
    q: "O que é a Orbis.Nft?",
    a: "A Orbis.Nft é uma coleção curada de objetos espaciais generativos — artefatos digitais fixados além do tempo e do espaço. Cada peça é única, armazenada de forma imutável on-chain e carrega um índice de raridade derivado de suas propriedades visuais.",
  },
  {
    q: "Como faço para comprar um NFT?",
    a: "Conecte uma carteira Web3 compatível (MetaMask, Coinbase Wallet ou WalletConnect), navegue até a página Comprar NFT, selecione a peça desejada e confirme a transação. Taxas de gas são aplicadas.",
  },
  {
    q: "Em qual blockchain a Orbis.Nft está?",
    a: "Todos os NFTs Orbis são cunhados na mainnet da Ethereum como tokens ERC-721. O endereço do contrato inteligente e os metadados completos on-chain estão disponíveis no Etherscan.",
  },
  {
    q: "O que é um índice de raridade?",
    a: "Cada NFT é avaliado algoritmicamente em dimensões visuais — profundidade, luminosidade, densidade de forma e variância cromática. Os índices variam de 1 a 10. Peças lendárias pontuam 9+.",
  },
  {
    q: "Posso revender meu NFT?",
    a: "Sim. Os NFTs Orbis podem ser listados e negociados em qualquer marketplace compatível com ERC-721, como OpenSea ou Blur. Vendas secundárias têm royalty de 5% para o criador.",
  },
  {
    q: "O que eu recebo com minha compra?",
    a: "Além do próprio token, os detentores recebem acesso à Orbis DAO, um certificado impresso físico, acesso antecipado a lançamentos futuros e entrada em nossa comunidade privada.",
  },
  {
    q: "Quantos NFTs existem no total?",
    a: "A coleção gênese tem um limite fixo de 333 peças. Nenhum suprimento adicional será cunhado dentro desta coleção.",
  },
  {
    q: "Existe lista de espera ou pré-venda?",
    a: "Siga nossas redes sociais e entre no Discord para ser notificado sobre próximos lançamentos, eventos de lista de espera e janelas de pré-venda.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#010828] text-cream pt-24 pb-32 lg:pb-16">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-[Anton] text-[40px] sm:text-[56px] lg:text-[72px] uppercase leading-none text-cream mb-2">
            Perguntas
          </h1>
          <span className="font-[Condiment] text-[28px] sm:text-[40px] text-neon">
            Perguntas frequentes
          </span>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4 max-w-[860px]">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`liquid-glass rounded-[24px] overflow-hidden transition-all ${isOpen ? 'bg-white/5' : ''}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-[Anton] text-[15px] sm:text-[18px] uppercase text-cream pr-4">{item.q}</span>
                  <ChevronRight
                    size={18}
                    className={`text-neon flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-mono text-[13px] sm:text-[14px] uppercase text-cream/60 px-6 pb-6 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
