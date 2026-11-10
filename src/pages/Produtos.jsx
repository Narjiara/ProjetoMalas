import Card from '../components/Card'

const malas = [
  { id: 1, nome: 'Mala de Bordo', imagem: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=700', descricao: 'Compacta e ideal para viagens curtas.', preco: 'R$ 199,90' },
  { id: 2, nome: 'Mala Média', imagem: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=700', descricao: 'Espaço ideal para alguns dias de viagem.', preco: 'R$ 279,90' },
  { id: 3, nome: 'Mala Grande', imagem: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=700', descricao: 'Mais espaço para viagens longas.', preco: 'R$ 349,90' },
  { id: 4, nome: 'Mala Executiva', imagem: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700', descricao: 'Visual discreto para trabalho e negócios.', preco: 'R$ 229,90' },
  { id: 5, nome: 'Mala Infantil', imagem: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700', descricao: 'Leve e prática para os pequenos viajantes.', preco: 'R$ 159,90' },
   { id: 6, nome: 'Conjunto de Malas', imagem: 'https://images.unsplash.com/photo-1553531384-411a247d9f2d?w=700', descricao: 'Três tamanhos para diferentes necessidades.', preco: 'R$ 499,90' }
]

export default function Produtos() {
  return (
    <section>
      <div className="section-heading">
        <p className="eyebrow">NOSSA COLEÇÃO</p>
        <h1>Encontre sua próxima mala</h1>
        <p>Confira alguns modelos disponíveis em nossa loja.</p>
      </div>
      <div className="products-grid">
        {malas.map((mala) => (
          <Card key={mala.id} nome={mala.nome} imagem={mala.imagem}
            descricao={mala.descricao} preco={mala.preco} />
        ))}
      </div>
    </section>
  )
}