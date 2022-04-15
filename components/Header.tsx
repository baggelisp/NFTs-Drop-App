import React from 'react'
import Image from 'next/image'
import { FiLogIn } from 'react-icons/fi';


export default function Header() {

    const doLogin = () => {
        return ''
    }
    return (
        <div className='sticky top-0 p-5 z-50  shadow-sm
        border-b-2 border-yellow-300 '>
            <div className='justify-between	md:flex max-w-screen-xl mx-auto align-middle block'>
                <h1 className='text-3xl text-center text-yellow-300 flex align-middle md:justify-start justify-center'>
                    <Image className='rounded-full' width={40} height={40} src={'/all-images.gif'}></Image>
                    <span className='ml-2'>GRADIENTS NTF</span>
                </h1>
                <div className='md:justify-between justify-center flex mt-2 md:mt-0'>
                    <button onClick={doLogin} className='px-5 py-2 bg-white rounded-lg text-yellow-400 flex items-center'>LOGIN WITH METAMASK <FiLogIn  className='ml-2'/></button>
                </div>
                {/* <h2 className='text-1xl mx-auto text-center text-pink-500 mt-2'>
                    Your Address: {user?.get('ethAddress')}
                </h2> */}
            </div>
        </div>
    )
}
