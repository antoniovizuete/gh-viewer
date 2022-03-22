import { Label } from '../types/Issue'

export default function IssueLabel(label: Label) {
  return (
    <div 
      className='w-fit px-2 md:px-3 py-1 rounded-md md:rounded-full border text-xs z-10'
      style={{ 
        borderColor: `#${label.color}`,
        backgroundColor: `#${label.color}`,
        filter: 'brightness(85%)'
      }}
    >{label.name}</div>
  )
}
