import LabeledInput from '../components/LabeledInput'
import { REPOSITORY, USERNAME, useSearchForm } from '../hooks/useSearchForm'

export default function SearchForm() {
  const { state, disabled, onChange, search} = useSearchForm()
  return (
    <>
      <LabeledInput
        label='Username:'
        name={USERNAME}
        onChange={onChange}
        value={state[USERNAME]}
      />
      <LabeledInput
        label='Repository:'
        name={REPOSITORY}
        onChange={onChange}
        value={state[REPOSITORY]}
      />
      <button
        className='mt-4 bg-blue-500 disabled:bg-blue-300 py-4 px-8 pl-9 rounded-md text-white font-black uppercase tracking-[0.5em]'
        disabled={disabled}
        onClick={search}
        type='button'
      >
        Search
      </button>
    </>
  )
}
