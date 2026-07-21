import { Outlet, NavLink } from 'react-router'
import { NavBar, MobileNav } from '../components/shared'
import { SocialIcons } from '../components/shared'

export default function Root() {
  return (
    <div className="bg-[#010828] text-cream min-h-screen overflow-x-hidden" style={{ fontFamily: 'Anton, sans-serif' }}>
      {/* Texture overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-60"
        style={{ backgroundImage: 'url(/texture.png)', backgroundSize: 'cover', mixBlendMode: 'lighten' }}
      />

      {/* Persistent header (non-home pages) */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 lg:px-12 pt-6 pb-4">
        <NavLink to="/" className="font-[Anton] text-[16px] uppercase text-cream tracking-wide">
          Orbis.Nft
        </NavLink>
        <NavBar />
        <div className="hidden lg:flex">
          <SocialIcons />
        </div>
      </header>

      <MobileNav />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
