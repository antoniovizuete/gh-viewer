import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import RepoIssuesPage from './pages/RepoIssuesPage'
import Header from './components/Header'
import IssuePage from './pages/IssuePage'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        
        <Route path='/:username/:repo' element={<RepoIssuesPage />} />
        <Route path='/:username/:repo/issues/:issue' element={<IssuePage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </main>
  )
}

export default App
