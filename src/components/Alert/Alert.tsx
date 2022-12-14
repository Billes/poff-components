import React, { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { AlertProps, AlertType } from './Alert.types'
import classNames from '../../utils/joinClassNames'

const Alert = ({
  show = false,
  closable = false,
  icon = false,
  type = AlertType.SUCCESS,
  headline,
  body,
  onClick,
}: AlertProps) => {
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live='assertive'
        className='pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6'
      >
        <div className='flex w-full flex-col items-center space-y-4 sm:items-end'>
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter='transform ease-out duration-300 transition'
            enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
            enterTo='translate-y-0 opacity-100 sm:translate-x-0'
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div
              className={classNames(
                'pointer-events-auto relative w-96 rounded-md p-5 shadow-lg',
                type === AlertType.ERROR ? 'bg-red-200' : '',
                type === AlertType.INFO ? 'bg-sky-200' : '',
                type === AlertType.SUCCESS ? 'bg-emerald-100' : '',
                type === AlertType.WARNING ? 'bg-orange-100' : '',
              )}
            >
              <div className='flex items-start'>
                {icon && (
                  <div className='flex-shrink-0'>
                    {type === AlertType.ERROR && (
                      <XCircleIcon className='h-5 w-5 text-red-700' aria-hidden='true' />
                    )}
                    {type === AlertType.INFO && (
                      <InformationCircleIcon className='h-5 w-5 text-sky-600' aria-hidden='true' />
                    )}
                    {type === AlertType.SUCCESS && (
                      <CheckCircleIcon className='h-5 w-5 text-emerald-700' aria-hidden='true' />
                    )}
                    {type === AlertType.WARNING && (
                      <ExclamationTriangleIcon
                        className='h-5 w-5 text-orange-500'
                        aria-hidden='true'
                      />
                    )}
                  </div>
                )}
                <div className={classNames('grow', icon ? 'ml-3' : '')}>
                  <h3
                    className={classNames(
                      'font-roboto text-sm font-bold',
                      icon ? 'text-left' : 'text-center',
                      type === AlertType.ERROR ? 'text-red-700' : '',
                      type === AlertType.INFO ? 'text-sky-600' : '',
                      type === AlertType.SUCCESS ? 'text-emerald-700' : '',
                      type === AlertType.WARNING ? 'text-orange-500' : '',
                    )}
                  >
                    {headline}
                  </h3>
                  {body && (
                    <div
                      className={classNames(
                        'mt-2 font-roboto text-sm',
                        icon ? 'text-left' : 'text-center',
                        type === AlertType.ERROR ? 'text-red-700' : '',
                        type === AlertType.INFO ? 'text-sky-600' : '',
                        type === AlertType.SUCCESS ? 'text-emerald-700' : '',
                        type === AlertType.WARNING ? 'text-orange-500' : '',
                      )}
                    >
                      <p>{body}</p>
                    </div>
                  )}
                </div>
              </div>
              {closable && (
                <div className='absolute top-2 right-2 z-10 flex'>
                  <button
                    type='button'
                    className={classNames(
                      'inline-flex rounded-md focus:outline-none',
                      type === AlertType.ERROR ? 'text-red-700 hover:text-red-900' : '',
                      type === AlertType.INFO ? 'text-sky-600 hover:text-sky-800' : '',
                      type === AlertType.SUCCESS ? 'text-emerald-700 hover:text-emerald-900' : '',
                      type === AlertType.WARNING ? 'text-orange-500 hover:text-orange-700' : '',
                    )}
                    onClick={onClick}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
              )}
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

export default Alert
