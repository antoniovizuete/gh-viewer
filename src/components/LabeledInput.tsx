import React from 'react'

type LabeledInputProps = {
  label: string
  name: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
}

export default function LabeledInput({ label, name, onChange, value }: LabeledInputProps) {
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
