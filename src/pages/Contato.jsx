import { useState } from 'react'
import Button from '../components/Button'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  function enviar(event) {
    event.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="text-page contact">
      <p className="eyebrow">FALE CONOSCO</p>
      <h1>Entre em contato</h1>
      <form onSubmit={enviar}>
        <label>Nome<input type="text" placeholder="Seu nome" required /></label>
        <label>E-mail<input type="email" placeholder="seuemail@exemplo.com" required /></label>
        <label>Mensagem<textarea rows="5" placeholder="Digite sua mensagem" required /></label>
        <Button>Enviar mensagem</Button>
      </form>
      {enviado && <p className="success">Mensagem enviada! (demonstração)</p>}
    </section>
  )
}