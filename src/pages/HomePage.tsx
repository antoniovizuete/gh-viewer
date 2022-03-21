import Logo from '../components/Logo'
import SearchForm from '../components/SearchForm'

export default function HomePage() {
  
  return (
    <>
      <header className='flex justify-center items-center h-24 border-b border-blue-500 mb-4'>
        <Logo className='fill-blue-500 h-16' />
        <h1 className='text-4xl font-semibold text-blue-500'>gh-viewer</h1>
      </header>
      <section className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-center'>Search for issues and pull request of an GitHub repo</h1>
        <SearchForm />
      </section>
    </>
  )
}
