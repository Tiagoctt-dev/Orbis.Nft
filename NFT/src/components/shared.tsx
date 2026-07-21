import { Mail, X, GitFork } from 'lucide-react'
import { NavLink } from 'react-router'

export const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Galeria', to: '/gallery' },
  { label: 'Comprar NFT', to: '/buy' },
  { label: 'Perguntas', to: '/faq' },
  { label: 'Contato', to: '/contact' },
]

export const ABOUT_TEXT = "Um objeto digital fixado além do tempo e do espaço. Uma exploração da distância, forma e silêncio no espaço"

export function SocialIcons({ vertical = false }: { vertical?: boolean }) {
  const icons = [Mail, X, GitFork]
  if (vertical) {
    return (
      <div className="liquid-glass rounded-[0.5rem] sm:rounded-[0.75rem] lg:rounded-[1.25rem] flex flex-col">
        {icons.map((Icon, i) => (
          <button
            key={i}
            className={`flex items-center justify-center w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] aspect-square hover:bg-white/10 transition-colors ${i < icons.length - 1 ? 'border-b border-white/10' : ''}`}
          >
            <Icon size={20} className="text-cream" />
          </button>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-3">
      {icons.map((Icon, i) => (
        <button
          key={i}
          className="liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <Icon size={20} className="text-cream" />
        </button>
      ))}
    </div>
  )
}

export function NavBar() {
  return (
    <nav className="liquid-glass hidden lg:block rounded-[28px] px-[52px] py-[24px]">
      <ul className="flex gap-8">
        {NAV_LINKS.map(link => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-[Anton] text-[13px] uppercase transition-colors ${isActive ? 'text-neon' : 'text-cream hover:text-neon'}`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 liquid-glass border-t border-white/10">
      <ul className="flex justify-around py-3 px-2">
        {NAV_LINKS.map(link => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-[Anton] text-[10px] uppercase flex flex-col items-center gap-0.5 transition-colors ${isActive ? 'text-neon' : 'text-cream/70'}`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
