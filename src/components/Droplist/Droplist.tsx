import { FC } from 'react'
import { DroplistProps } from './Droplist.types'
import classNames from '../../utils/joinClassNames'

const Droplist: FC<DroplistProps> = ({ dropListName, Items, error, onChange }) => {
  return (
    <div>
      <label>
        {' '}
        <select
          name={dropListName}
          id={dropListName}
          placeholder='Please select your role'
          className={classNames(
            'w-full rounded-md py-1 px-2 shadow-sm',
            'border border-gray-300',
            'font-roboto text-sm font-light text-gray-700',
            'focus:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-75',
            error ? 'border-red-700 text-red-700' : 'focus:border-sky-600',
          )}
        >
          {Items?.forEach(function (item) {
            ;<option key={item.itemKey} value={item.name}></option>
          })}
          ;
        </select>
      </label>
    </div>
  )
}

export default Droplist
