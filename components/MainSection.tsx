import React from 'react'
import Image from 'next/image'

function MainSection() {
  return (
    <div className=' max-w-6xl mx-auto my-10 md:flex justify-between block'>
      {/* left section */}
      <div className='md:w-[55%] pt-10'>
        <h1 className='text-4xl font-bold text-white my-5'>
            GRADIENTS NTF COLLECTION
        </h1>
        <h2 className='text-xl text-gray-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad aliquam veniam eum rem ipsum error, 
          itaque doloremque quaerat aperiam, recusandae nostrum obcaecati enim non fugiat laudantium ratione 
          dolore debitis.
        </h2>
        <button className='h-16 w-full rounded-full bg-gradient-to-bl from-yellow-200  to-yellow text-white mt-20'>MINT NFT (0.01 ETH)</button>

      </div>

      {/* right section */}

      <div className='md:w-[45%] flex flex-wrap justify-center pt-4'>
        <div>
          <Image className='rounded-sm ' width={180} height={180} src={'/16.png'}></Image>
        </div>
        <div className='top-[10px] left-[13px] relative'>
          <Image className='rounded-sm' width={180} height={180} src={'/5.png'}></Image>
        </div>
        <div className='top-[10px] relative'>
          <Image className='rounded-sm' width={180} height={180} src={'/6.png'}></Image>
        </div>
        <div className='top-[20px] left-[13px] relative'>
          <Image className='rounded-sm' width={180} height={180} src={'/7.png'}></Image>
        </div>
      </div>
      
    </div>
  )
}

export default MainSection