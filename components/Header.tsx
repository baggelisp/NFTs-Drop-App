import React from 'react'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa';


export default function Header() {

    const doLogin = () => {
        return ''
    }
    return (
        <div className='sticky top-0 p-5 z-50  shadow-sm
        border-b-2 border-yellow-300 '>
            <div className='justify-between	flex max-w-screen-xl mx-auto align-middle'>
                <h1 className='text-3xl text-center text-yellow-300 flex align-middle'>
                    Gradients NFTs
                </h1>
                <div className='justify-between	flex'>
                    <button onClick={doLogin} className='px-5 py-2 bg-white rounded-lg text-yellow-300 flex items-center'>LOGIN WITH METAMASK <FaBeer  className='ml-2'/></button>
                </div>
                {/* <h2 className='text-1xl mx-auto text-center text-pink-500 mt-2'>
                    Your Address: {user?.get('ethAddress')}
                </h2> */}
            </div>
        </div>
    )
}
