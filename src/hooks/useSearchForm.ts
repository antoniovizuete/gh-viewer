import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const USERNAME = 'username'
export const REPOSITORY = 'repository'

const intialState = {
  [USERNAME]: '',
  [REPOSITORY]: '',
}

export const useSearchForm = () => {
  const navigate = useNavigate()
  const [state, setState] = useState(intialState)
  const [disabled, setDisabled] = useState(true)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const search = () => {
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

  return {
    state, disabled, onChange, search
  }
}