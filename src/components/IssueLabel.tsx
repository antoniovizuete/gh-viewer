import { Label } from '../types/SearchIssueResult'

export default function IssueLabel(label: Label) {
  return (
    <div 
      className='mt-2 px-3 py-1 rounded-full border text-xs z-10'
      style={{ 
        borderColor: `#${label.color}`,
        backgroundColor: `#${label.color}`,
        filter: 'brightness(85%)'
      }}
    >{label.name}</div>
  )
}
