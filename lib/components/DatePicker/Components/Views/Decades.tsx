import { useContext } from 'react'
import { addYears, startOfYearPeriod } from '../../Utils/date'
import { DatePickerContext } from '../DatePickerProvider'
import { twMerge } from 'tailwind-merge'

const Decades = () => {
  const { selectedDate, showSelectedDate, changeSelectedDate, setView, getFormattedDate, options } =
    useContext(DatePickerContext)
  return (
    <div className='grid w-64 grid-cols-4'>
      {[...Array(12)].map((_year, index) => {
        const first = startOfYearPeriod(selectedDate, 100)
        const year = first - 10 + index * 10
        return (
          <span
            key={index}
            className={`block flex-1 cursor-pointer rounded-lg border-0 text-center font-roboto text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ${
              showSelectedDate &&
              selectedDate.getTime() > 0 &&
              Number(getFormattedDate(selectedDate, { year: 'numeric' })) === year
                ? twMerge(
                    'bg-sky-700 text-white hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-600',
                    options?.theme?.selected,
                  )
                : ''
            } ${
              index == 0 || index == 11
                ? twMerge('text-gray-500', options?.theme?.disabledText)
                : twMerge('text-gray-900', options?.theme?.text)
            }
                            ${
                              options?.minDate &&
                              year < Number(getFormattedDate(options?.minDate, { year: 'numeric' }))
                                ? twMerge('text-gray-500', options?.theme?.disabledText)
                                : ''
                            }
                            ${
                              options?.maxDate &&
                              year > Number(getFormattedDate(options?.maxDate, { year: 'numeric' }))
                                ? twMerge('text-gray-500', options?.theme?.disabledText)
                                : ''
                            }
                            `}
            onClick={() => {
              changeSelectedDate(
                'date',
                new Date(addYears(selectedDate, year - selectedDate.getFullYear())),
              )
              setView('years')
            }}
          >
            {year}
          </span>
        )
      })}
    </div>
  )
}

export default Decades
