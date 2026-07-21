import { useState } from 'react'
import { Mail, X, GitFork, Send } from 'lucide-react'

const SOCIALS = [
  { Icon: Mail, label: "Email", handle: "hello@orbis.nft" },
  { Icon: X, label: "X / Twitter", handle: "@OrbisNft" },
  { Icon: GitFork, label: "GitHub", handle: "github.com/orbis-nft" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#010828] text-cream pt-24 pb-32 lg:pb-16">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-[Anton] text-[40px] sm:text-[56px] lg:text-[72px] uppercase leading-none text-cream mb-2">
            Contato
          </h1>
          <span className="font-[Condiment] text-[28px] sm:text-[40px] text-neon">
            Fale conosco
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — form */}
          <div className="liquid-glass rounded-[32px] p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full bg-neon/20 border border-neon flex items-center justify-center">
                  <Send size={24} className="text-neon" />
                </div>
                <p className="font-[Anton] text-[28px] uppercase text-cream text-center">Mensagem enviada.</p>
                <p className="font-mono text-[13px] uppercase text-cream/40 text-center">
                  Responderemos em até 48 horas.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-4 font-[Anton] text-[12px] uppercase text-neon border border-neon px-5 py-2 rounded-full hover:bg-neon/10 transition-colors"
                >
                  Enviar outra
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-[Anton] text-[11px] uppercase text-cream/50 tracking-wider">Nome</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Seu nome"
                    className="bg-white/5 border border-white/10 rounded-[14px] px-5 py-4 font-mono text-[14px] text-cream placeholder:text-cream/20 focus:outline-none focus:border-neon transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-[Anton] text-[11px] uppercase text-cream/50 tracking-wider">E-mail</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="seu@email.com"
                    className="bg-white/5 border border-white/10 rounded-[14px] px-5 py-4 font-mono text-[14px] text-cream placeholder:text-cream/20 focus:outline-none focus:border-neon transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-[Anton] text-[11px] uppercase text-cream/50 tracking-wider">Mensagem</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="O que você tem em mente?"
                    className="bg-white/5 border border-white/10 rounded-[14px] px-5 py-4 font-mono text-[14px] text-cream placeholder:text-cream/20 focus:outline-none focus:border-neon transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-between rounded-[16px] bg-gradient-to-br from-[#b724ff] to-[#7c3aed] px-6 py-5 shadow-lg shadow-purple-500/30 hover:opacity-90 transition-opacity mt-2"
                >
                  <span className="font-[Anton] text-[18px] uppercase text-white">Enviar mensagem</span>
                  <Send size={20} className="text-white" />
                </button>
              </form>
            )}
          </div>

          {/* Right — socials + info */}
          <div className="flex flex-col gap-6">
            <div className="liquid-glass rounded-[32px] p-8">
              <p className="font-[Anton] text-[13px] uppercase text-cream/50 mb-6 tracking-wider">Encontre-nos em</p>
              <div className="flex flex-col gap-4">
                {SOCIALS.map(({ Icon, label, handle }, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 liquid-glass rounded-[12px] flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <Icon size={18} className="text-cream" />
                    </div>
                    <div>
                      <p className="font-[Anton] text-[11px] uppercase text-cream/40">{label}</p>
                      <p className="font-mono text-[14px] text-cream group-hover:text-neon transition-colors">{handle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="liquid-glass rounded-[32px] p-8">
              <p className="font-[Anton] text-[13px] uppercase text-cream/50 mb-4 tracking-wider">Tempo de resposta</p>
              <p className="font-mono text-[14px] text-cream/60 uppercase leading-relaxed">
                Normalmente respondemos em 24–48 horas. Para assuntos urgentes sobre
                transações ou problemas com contratos inteligentes, entre em contato pelo X para suporte mais rápido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
