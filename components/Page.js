import Menu from './Menu'

export default function Page({ children }) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}
