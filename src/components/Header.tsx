import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='h-24 mt-4'>
      <Link to="/" className='flex justify-center items-center'>
        <Logo className='fill-blue-500 h-16' />
        <h1 className='text-4xl font-semibold text-blue-500'>gh-viewer</h1>
      </Link>
    </header>
  )
}
