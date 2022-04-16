import React from 'react'
import Image from 'next/image'
import { useAddress } from '@thirdweb-dev/react';

function MainSection() {
  const address = useAddress();
  
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
        <div className='mt-20'></div>
        <p className='text-md text-gray-300  text-center'>13 / 21 NFT's claimed</p>
        {
          address ?  <p className='text-sm text-yellow-100  text-center'>Connected with {address} </p> : ''
        }
        <button disabled={!address} className='h-16 w-full disabled:opacity-70 hover:shadow-yellow-100 hover:shadow-md rounded-full bg-gradient-to-bl from-yellow-200  to-yellow text-white mt-2'>MINT NFT (0.01 ETH)</button>

      </div>

      {/* right section */}

      <div className='md:w-[45%] md:flex flex-wrap justify-center pt-4 hidden'>
        <div className='border-4 h-[180px] overflow-hidden border-white border-opacity-60 rounded-sm'>
          <Image className='' width={180} height={180} src={'/16.png'}></Image>
        </div>
        <div className='top-[20px] left-[18px] relative border-4 h-[180px] overflow-hidden border-white border-opacity-60 rounded-sm'>
          <Image className='' width={180} height={180} src={'/5.png'}></Image>
        </div>
        <div className='top-[0px] relative border-4 h-[180px] overflow-hidden border-white border-opacity-60 rounded-sm'>
          <Image className='' width={180} height={180} src={'/6.png'}></Image>
        </div>
        <div className='top-[20px] left-[18px] relative border-4 h-[180px] overflow-hidden border-white border-opacity-60 rounded-sm'>
          <Image className='' width={180} height={180} src={'/7.png'}></Image>
        </div>
      </div>
      
    </div>
  )
}

export default MainSection