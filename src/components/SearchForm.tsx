import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LabeledInput from '../components/LabeledInput'

const USERNAME = 'username'
const REPOSITORY = 'repository'

const intialState = {
  [USERNAME]: '',
  [REPOSITORY]: '',
}

export default function SearchForm() {
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
    </>
  )
}
