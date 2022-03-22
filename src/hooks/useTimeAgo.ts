const epochs: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
];

export const useTimeAgo = (date: Date) => {
  const now = new Date()
  const timeAgoInSeconds = (date.getTime() - now.getTime())/1000
  const [unit, qty] = epochs
  .map(([name, seconds]) => [ 
    name,
    Math.floor(timeAgoInSeconds / seconds),
    Math.floor(Math.abs(timeAgoInSeconds) / seconds),
  ] as [Intl.RelativeTimeFormatUnit, number, number])
  .find(([, ,reminder]) =>  reminder >= 1 ) || ['second',0]
  
  const formater = new Intl.RelativeTimeFormat('en-UK')
  return formater.format(qty, unit as Intl.RelativeTimeFormatUnit)
}