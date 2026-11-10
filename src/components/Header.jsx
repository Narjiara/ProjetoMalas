import Menu from './Menu'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <LinkBrand />
        <Menu />
      </div>
    </header>
  )
}

function LinkBrand() {
  return <a className="brand" href="/">Mala <span>&</span> Cia</a>
}