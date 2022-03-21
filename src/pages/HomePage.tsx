import Header from '../components/Header'
import SearchForm from '../components/SearchForm'

export default function HomePage() {
  
  return (
    <>
      <Header />
      <section className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-center'>Search for issues and pull request of an GitHub repo</h1>
        <SearchForm />
      </section>
    </>
  )
}
