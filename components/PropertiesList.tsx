import React from 'react'
import { useOvermind } from '../store'

interface PropertiesListProps {
  title: string
}

export default function PropertiesList({ title }: PropertiesListProps) {
  const { state, actions } = useOvermind()
  return (
    <main className='max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
      <div className='sm:text-center lg:text-left'>
        <h2 className='text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
          {state.page}
          <br className='xl:hidden' />
          <span className='text-indigo-600'>{title}</span>
        </h2>
        <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
          <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
            <div>
              <dl>
                <div className='px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium leading-5 text-gray-500'>title</dt>
                  <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>
                    <div className='flex items-center'>
                      <div className='font-bold'>{state.title}</div>
                      <div className='px-4 py-2 ml-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
                        <button
                          type='button'
                          onClick={() => {
                            const now = new Date()
                            const newTitle = `${now.getSeconds()}.${now.getMilliseconds()}`
                            actions.titleChanged(newTitle)
                          }}
                        >
                          change title
                        </button>
                      </div>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
