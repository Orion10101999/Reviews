import React from 'react'
import Tooltip from './Tooltip'

const Test = () => {

  return (
    <div className='mx-auto max-w-3xl p-10'>
        <Tooltip tooltip="I am tooltip">
            <button className='bg-gray-900 text-white p-3 rounded'>
                Show Me Tooltip
            </button>
        </Tooltip>
    </div>
  )
}

export default Test