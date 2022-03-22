import SearchForm from '../components/SearchForm'

type HomePageProps = {
  notFound?: boolean
}

export default function HomePage({ notFound = false }: HomePageProps) {
  
  return (
    <>
      <section className='mt-36 flex flex-col justify-center items-center gap-5'>
        <h1 className='text-center'>Search for issues and pull request of an GitHub repo</h1>
        <SearchForm />
        {notFound && <span className='text-orange-400'>Repository not found</span>}
      </section>
    </>
  )
}
