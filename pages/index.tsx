import React from 'react'
import { GetServerSideProps } from 'next'
import { config as configOvermind, useOvermind } from '../store'
import Nav from '../components/nav'
import PropertiesList from '../components/PropertiesList'
import { createOvermindSSR } from 'overmind'
import OvermindMutationProps from '../store/PageIndexProps'

const PageIndex: React.FC = () => {
  const { state } = useOvermind()
  // -- RENDER --
  return (
    <div className='relative overflow-hidden bg-white'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>
          <Nav />

          <PropertiesList title={state.title} />

          <footer className='flex justify-center my-8 text-gray-700'>
            {/* date from server: {JSON.stringify(props)} */}
          </footer>
        </div>
      </div>
    </div>
  )
}

export default PageIndex

export const getServerSideProps: GetServerSideProps = async () => {
  const overmind = createOvermindSSR(configOvermind)
  overmind.state.page = 'index'
  overmind.state.title = `${overmind.state.title} + server`

  return {
    props: { mutations: overmind.hydrate() },
  }
}
