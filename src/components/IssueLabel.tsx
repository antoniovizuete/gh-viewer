import { Label } from '../types/SearchIssueResult'

export default function IssueLabel(label: Label) {
  return (
    <div 
      className={`mt-2 px-3 py-1 rounded-full border text-xs`}
      style={{ 
        borderColor: `#${label.color}`,
        backgroundColor: `#${label.color}`,
        filter: 'brightness(85%)'
      }}
    >{label.name}</div>
  )
}
