type LabeledInputProps = {
  label: string
  name: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
}

const LabeledInput: React.FC<LabeledInputProps> = ({ label, name, onChange, value }) => {
  return (
    <div className='flex flex-col w-72 sm:w-96'>
      <label htmlFor={name}>{label}</label>
      <input
        className='rounded-md border border-blue-500 p-2'
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default LabeledInput