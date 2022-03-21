import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LabeledInput from '../components/LabeledInput'
import Logo from '../components/Logo'

const USERNAME = 'username'
const REPOSITORY = 'repository'

const intialState = {
  [USERNAME]: '',
  [REPOSITORY]: '',
}

export default function HomePage() {
  const navigate = useNavigate()
  const [state, setState] = useState(intialState)
  const [disabled, setDisabled] = useState(true)

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSearchClick = () => {
    if (!state[USERNAME] || !state[REPOSITORY]) {
      setDisabled(true)
    } else {
      navigate(`/${state[USERNAME]}/${state[REPOSITORY]}`)
    }
  }

  useEffect(() => {
    if (!state[USERNAME] || !state[REPOSITORY]) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [state])

  return (
    <>
      <header className='flex justify-center items-center h-24 border-b border-blue-500 mb-4'>
        <Logo className='fill-blue-500 h-16' />
        <h1 className='text-4xl font-semibold text-blue-500'>gh-viewer</h1>
      </header>
      <section className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-center'>Search for issues and pull request of an GitHub repo</h1>
        <LabeledInput
          label='Username:'
          name={USERNAME}
          onChange={handleInputOnChange}
          value={state[USERNAME]}
        />
        <LabeledInput
          label='Repository:'
          name={REPOSITORY}
          onChange={handleInputOnChange}
          value={state[REPOSITORY]}
        />

        <button
          className='mt-4 bg-blue-500 disabled:bg-blue-300 py-4 px-8 pl-9 rounded-md text-white font-black uppercase tracking-[0.5em]'
          disabled={disabled}
          onClick={handleSearchClick}
          type='button'
        >
          Search
        </button>

      </section>
    </>
  )
}
