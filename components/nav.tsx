/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import Link from 'next/link'
import { useOvermind } from '../store'

export default function Nav() {
  const { state, actions } = useOvermind()
  return (
    <nav>
      <div className='relative px-4 pt-6 sm:px-6 lg:px-8'>
        <nav className='relative flex items-center justify-between sm:h-10 lg:justify-start'>
          <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <a href='#' aria-label='Home'>
                <img
                  className='w-auto h-8 sm:h-10'
                  src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                  alt='Logo'
                />
              </a>
              <div className='flex items-center -mr-2 md:hidden'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500'
                  id='main-menu'
                  aria-label='Main menu'
                  aria-haspopup='true'
                >
                  <svg className='w-6 h-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='hidden md:block md:ml-10 md:pr-4'>
            <Link href='/'>
              <a className='mx-3 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900'>
                Home
              </a>
            </Link>
            <Link href='/other-page'>
              <a className='mx-3 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900'>
                Other Page
              </a>
            </Link>
            <Link href='/change-title-on-server'>
              <a className='mx-3 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900'>
                change-title-on-server
              </a>
            </Link>
          </div>
        </nav>
      </div>

      <div className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'>
        <div className='rounded-lg shadow-md'>
          <div
            className='overflow-hidden bg-white rounded-lg shadow-xs'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='main-menu'
          >
            <div className='flex items-center justify-between px-5 py-4'>
              <div>
                <img
                  className='w-auto h-8'
                  src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                  alt=''
                />
              </div>
              <div className='-mr-2'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500'
                  aria-label='Close menu'
                  onClick={() => {
                    actions.menuToggled()
                  }}
                >
                  {state.menuOpened ? (
                    <svg className='w-6 h-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  ) : (
                    <svg
                      className='w-3 h-3 fill-current'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>Menu</title>
                      <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className={`${state.menuOpened ? 'block' : 'hidden'} px-2 pt-2 pb-3`}>
              <Link href='/'>
                <a
                  className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                  role='menuitem'
                  onClick={() => {
                    actions.menuToggled()
                  }}
                >
                  Home
                </a>
              </Link>

              <Link href='/other-page'>
                <a
                  className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                  role='menuitem'
                  onClick={() => {
                    actions.menuToggled()
                  }}
                >
                  Other Page
                </a>
              </Link>

              <Link href='/change-title-on-server'>
                <a
                  className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                  role='menuitem'
                  onClick={() => {
                    actions.menuToggled()
                  }}
                >
                  change-title-on-server
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
