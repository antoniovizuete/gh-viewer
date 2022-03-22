import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RepoIssuesPage from './pages/RepoIssuesPage'
import Header from './components/Header'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/:username/:repo' element={<RepoIssuesPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </main>
  )
}

export default App
