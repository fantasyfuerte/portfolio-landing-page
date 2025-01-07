import React from 'react'
import MotionTransition from './transition-component'
import Image from 'next/image'

function AvatarComponent() {
  return (
    <MotionTransition position='bottom' className='bottom-0 right-0 hidden md:inline-block md:absolute'>
        <Image className='w-full h-full' src="/avatar-1.png" alt="avatar" width={400} height={400} />
    </MotionTransition>
  )
}

export default AvatarComponent