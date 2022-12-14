import { FC, useState } from 'react'
import { DroplistProps } from './Droplist.types'
import classNames from '../../utils/joinClassNames'

const Droplist: FC<DroplistProps> = ({
  dropListName,
  Items,
  error,
  placeHolder,
  groupOption,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>()

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const answer = event.target.value
    setSelectedOption(answer)
  }

  return (
    <div>
      <label>
        {' '}
        <select
          name={dropListName}
          id={dropListName}
          placeholder={placeHolder}
          onChange={selectChange}
          className={classNames(
            'w-full rounded-md py-1 px-2 shadow-sm',
            'border border-gray-300',
            'font-roboto text-sm font-light text-gray-700',
            'focus:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-75',
            error ? 'border-red-700 text-red-700' : 'focus:border-sky-600',
          )}
        >
          <option value='' selected>
            --{placeHolder}--
          </option>
          <optgroup label={groupOption}></optgroup>
          {Items?.map((item: Items) => (
            <option key={item.itemKey} value={item.itemKey}>
              {item.name}
            </option>
          ))}
        </select>
        {error && <span className='ml-2 text-xs text-red-500'>{error}</span>}
        {<span> You select : {selectedOption}</span>} //The operation environment don't need this
        line, This is show the user selected with option.The operation environment doesn't need this
        line, This shows the user selected which option.
      </label>
    </div>
  )
}

export default Droplist
