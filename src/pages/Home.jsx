import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">MALA & CIA</p>
      <h1>Prepare a mala.<br /><span>Viva a viagem.</span></h1>
      <p>Encontre malas práticas e resistentes para acompanhar você em qualquer destino.</p>
      <Link to="/produtos"><Button>Conheça nossos produtos</Button></Link>
    </section>
  )
}