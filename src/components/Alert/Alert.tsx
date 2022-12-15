import React, { useEffect } from 'react'
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
  closable = false,
  icon = false,
  type = AlertType.SUCCESS,
  headline,
  body,
  destroy,
  duration = 0,
  id = 'alert-id',
}: AlertProps) => {
  useEffect(() => {
    if (!duration) return

    const timer = setTimeout(() => {
      if (duration !== 0) {
        destroy()
      }
    }, duration)

    return () => clearTimeout(timer)
  }, [destroy, duration, closable])

  return (
    <div
      id={id}
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
              <ExclamationTriangleIcon className='h-5 w-5 text-orange-500' aria-hidden='true' />
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
              <p dangerouslySetInnerHTML={{ __html: body }} />
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
            onClick={destroy}
          >
            <span className='sr-only'>Close</span>
            <XMarkIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </div>
      )}
    </div>
  )
}

const shouldRerender = (prevProps: AlertProps, nextProps: AlertProps) => {
  return prevProps.id === nextProps.id
}

export default React.memo(Alert, shouldRerender)
