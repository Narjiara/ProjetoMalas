import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Início</Link>
      <Link to="/produtos">Malas</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  )
}