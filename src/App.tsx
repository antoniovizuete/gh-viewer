import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RepoIssuesPage from './pages/RepoIssuesPage'

function App() {

  return (
    <main className='bg-slate-50 min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
