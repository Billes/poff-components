import { Views } from '../Components/DatePickerProvider'

export const firstDateOfMonth = (
  selectedYear: number,
  selectedMonth: number,
  date: number,
): number => {
  const newDate = new Date(0)
  newDate.setFullYear(selectedYear, selectedMonth, date)
  return newDate.setHours(12, 0, 0, 0) // 12 noon to avoid timezone issues in the database
}

export const addDays = (date: number, amount: number): number => {
  const newDate = new Date(date)
  return newDate.setDate(newDate.getDate() + amount)
}

export const dayDiff = (day: number, from: number): number => {
  return (day - from + 7) % 7
}

export const dayOfTheWeekOf = (baseDate: number, dayOfWeek: number, weekStart = 0): number => {
  const baseDay = new Date(baseDate).getDay()
  return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart))
}

export const addMonths = (date: Date, amount: number): number => {
  const newDate = date
  const monthsToSet = newDate.getMonth() + amount
  let expectedMonth = monthsToSet % 12
  if (expectedMonth < 0) {
    expectedMonth += 12
  }

  const time = newDate.setMonth(monthsToSet)
  return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time
}

export const addYears = (date: Date, amount: number): number => {
  const newDate = date
  const expectedMonth = newDate.getMonth()
  const time = newDate.setFullYear(newDate.getFullYear() + amount)
  return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time
}

export const getFormattedDate = (
  language: string,
  date: Date | number,
  options?: Intl.DateTimeFormatOptions | null | undefined,
): string => {
  let defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }

  if (options) defaultOptions = options

  return new Intl.DateTimeFormat(language, defaultOptions).format(date)
}

export const goToPrevNext = (view: Views, date: Date, direction: number): number => {
  switch (view) {
    case 'days':
      return addMonths(date, direction)
    case 'months':
      return addYears(date, direction)
    case 'years':
      return addYears(date, direction * 10)
    case 'decades':
      return addYears(date, direction * 100)
    default:
      return addYears(date, direction * 10)
  }
}

export const startOfYearPeriod = (date: Date, years: number): number => {
  const year = date.getFullYear()
  return Math.floor(year / years) * years
}
