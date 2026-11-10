import Button from './Button'

export default function Card({ nome, imagem, descricao, preco }) {
  return (
    <article className="card">
      <img src={imagem} alt={nome} />
      <div className="card-info">
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <strong>{preco}</strong>
        <Button onClick={() => alert(`${nome} selecionada!`)}>Ver produto</Button>
      </div>
    </article>
  )
}