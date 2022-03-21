import Logo from './Logo'

export default function Header() {
  return (
    <header className='flex justify-center items-center h-24 border-b border-blue-500 mb-4'>
        <Logo className='fill-blue-500 h-16' />
        <h1 className='text-4xl font-semibold text-blue-500'>gh-viewer</h1>
      </header>
  )
}
