

import { motion } from 'motion/react'

const beneficios = [
  {
    numero: '01',
    titulo: 'Equipamentos de qualidade',
    descricao: 'Estrutura preparada para acompanhar sua evolução.'
  },
  {
    numero: '02',
    titulo: 'Seu ritmo. Sua evolução.',
    descricao: 'Um ambiente para você construir sua melhor versão.'
  },
  {
    numero: '03',
    titulo: 'Foco nos resultados',
    descricao: 'Mais consistência, mais disciplina, mais progresso.'
  }
]

export default function App() {
  return (
    <main className="site">
      <header className="navbar">
        <a className="logo" href="#inicio">
          VR<span>POWER</span>
          <small>GYM</small>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#estrutura">Estrutura</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="nav-cta" href="#contato">
          VENHA TREINAR <span>↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot" />
            SUA PRÓXIMA VERSÃO COMEÇA AQUI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            SUPERE
            <br />
            SEUS <span>LIMITES.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Disciplina para começar. Força para continuar.
            Um treino de cada vez, uma conquista por dia.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a className="button-primary" href="#contato">
              QUERO CONHECER <span>↗</span>
            </a>
            <a className="button-secondary" href="#estrutura">
              CONHEÇA A ACADEMIA
            </a>
          </motion.div>

          <div className="hero-footer">
            <span><i /> FORÇA</span>
            <span><i /> DISCIPLINA</span>
            <span><i /> EVOLUÇÃO</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Área visual da academia">
          <div className="visual-ring" />
          <div className="visual-mark">VR</div>
          <div className="visual-caption">
            <span>POWER GYM</span>
            <span>SEM DESCULPAS. SÓ EVOLUÇÃO.</span>
          </div>
          <div className="visual-number">01 / 03</div>
        </div>

        <div className="hero-index">VRPG — EST. YOUR JOURNEY</div>
      </section>

      <section className="benefits" id="estrutura">
        <div className="section-heading">
          <p className="eyebrow">FEITA PARA SUA EVOLUÇÃO</p>
          <h2>MAIS QUE TREINO. <span>ATITUDE.</span></h2>
          <p>O ambiente certo ajuda você a manter o foco naquilo que importa.</p>
        </div>

        <div className="benefit-grid">
          {beneficios.map((item, index) => (
            <motion.article
              className="benefit-card"
              key={item.numero}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <span className="benefit-number">{item.numero}</span>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
              <span className="card-arrow">↗</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <p className="eyebrow">SEU PRÓXIMO PASSO</p>
        <h2>VAMOS COMEÇAR?</h2>
        <p>Entre em contato com a VR POWER GYM e conheça a academia.</p>
        <a className="button-primary" href="https://wa.me/" target="_blank" rel="noreferrer">
          FALE CONOSCO PELO WHATSAPP ↗
        </a>
        <small>Configure o link oficial do WhatsApp antes de publicar.</small>
      </section>

      <footer className="footer">
        <a className="logo" href="#inicio">
          VR<span>POWER</span><small>GYM</small>
        </a>
        <span>FORÇA PARA IR ALÉM.</span>
        <span>© {new Date().getFullYear()} VR POWER GYM</span>
      </footer>
    </main>
  )
}
