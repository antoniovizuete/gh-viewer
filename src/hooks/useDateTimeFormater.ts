const epochs: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

export const useDateTimeFormater = (date: Date, locale = 'en-US') => {
  const now = new Date()
  const timeAgoInSeconds = (date.getTime() - now.getTime()) / 1000
  const [unit, qty] = epochs
    .map(([name, seconds]) => [
      name,
      Math.floor(timeAgoInSeconds / seconds),
      Math.floor(Math.abs(timeAgoInSeconds) / seconds)
    ] as [Intl.RelativeTimeFormatUnit, number, number])
    .find(([, , reminder]) => reminder >= 1) || ['second', 0]

  const relativeTimeFormater = new Intl.RelativeTimeFormat(locale)
  const dateFormater = new Intl.DateTimeFormat(locale)

  return {
    timeAgo: relativeTimeFormater.format(qty, unit as Intl.RelativeTimeFormatUnit),
    formated: dateFormater.format(date)
  }
}
