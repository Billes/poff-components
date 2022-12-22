import React, { FC, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { SelectMenuProps } from './SelectMenu.types'
import classNames from '../../utils/joinClassNames'

const SelectMenu: FC<SelectMenuProps> = ({
  name,
  options,
  selected,
  valueIdentifier,
  keyIdentifier,
  disabled = false,
  onChange,
}) => (
  <div className='relative'>
    <Listbox value={selected} name={name} onChange={onChange} disabled={disabled}>
      {({ open }) => (
        <>
          <Listbox.Button className='relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm'>
            <span className='block truncate font-roboto font-light'>
              {selected ? selected[valueIdentifier] : 'Välj...'}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </span>
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((option) => (
                <Listbox.Option
                  key={option[keyIdentifier]}
                  className='relative flex cursor-default select-none items-center py-2 pl-8 pr-4 ui-active:bg-sky-600 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900'
                  value={option}
                  disabled={option['unavailable']}
                >
                  {selected && option[keyIdentifier] === selected[keyIdentifier] ? (
                    <span className='absolute left-0 items-center pl-1.5'>
                      <CheckIcon className='h-5 w-5' aria-hidden='true' />
                    </span>
                  ) : null}
                  <span
                    className={classNames(
                      selected && option[keyIdentifier] === selected[keyIdentifier]
                        ? 'font-semibold'
                        : 'font-light',
                      'block truncate font-roboto',
                    )}
                  >
                    {option[valueIdentifier]}
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  </div>
)

export default SelectMenu
