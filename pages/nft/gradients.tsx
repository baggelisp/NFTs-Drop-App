import React from 'react'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'

function gradients() {
  return (
    <div className='h-[100vh] bg-gradient-to-bl from-yellow-200  to-yellow-500 p-[2.5vh] overflow-hidden'>
        <div className='bg-black rounded-lg px-5 h-[95vh] overflow-y-auto'>
            <Header></Header>
            <MainSection></MainSection>
        </div>
    </div>
  )
}

export default gradients