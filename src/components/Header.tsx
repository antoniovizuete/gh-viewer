import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full h-24 pt-4 bg-slate-100 z-50 backdrop-blur-sm bg-slate-100/80'>
      <Link to="/" className='w-fit mx-auto flex justify-center items-center'>
        <Logo className='fill-blue-500 h-16' />
        <h1 className='text-4xl font-semibold text-blue-500'>gh-viewer</h1>
      </Link>
    </header>
  )
}
