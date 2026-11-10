import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="text-page">
      <h1>404 - Página não encontrada</h1>
      <p>Não encontramos a página que você está procurando.</p>
      <Link to="/">Voltar para o início</Link>
    </section>
  )
}