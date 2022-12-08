import React from 'react'
import { DroplistProps } from './Droplist.types'

const Droplist = ({ dropListName, Items, error, onChange }: DroplistProps) => {
  function stylish(): string {
    return ' w-full rounded-md py-1 px-2 shadow-sm \
    border border-gray-300 \
    font-roboto text-sm font-light text-gray-700 \
    focus:outline-none \
    disabled:cursor-not-allowed disabled:opacity-75 \
    error ? border-red-700 text-red-700 : focus:border-sky-600 '
  }

  function selectOption(): any {

  }
  return (
    <div>
      <label>
        {' '}
        <select name='{dropListName}' id='{dropListName}' className={stylish()}>
          Droplist.Items.forEach(function (key, elemet) {
            '<option value=' + function.key + '>' + function.elemet + '</option>'
          })
        </select>
      </label>
    </div>
  )
}

export default Droplist
