import React from 'react'
import Image from 'next/image'
import { FiLogIn } from 'react-icons/fi';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { disconnect } from 'process';
import truncateEthAddress from '../helpers/truncateEthAddress';


export default function Header() {

    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

    const doLogin = () => {
        connectWithMetamask().then( res => {
            if (res.error) alert("Please install MetaMask on your browser.");
        })
    }

    return (
        <div className='sticky top-0 p-5 z-50  shadow-sm
        border-b-2 border-yellow-300 '>
            <div className='justify-between	md:flex max-w-screen-xl mx-auto items-center block'>
                <h1 className='text-3xl text-center text-yellow-300 flex items-center md:justify-start justify-center'>
                    <Image className='rounded-full' width={40} height={40} src={'/all-images.gif'}></Image>
                    <span className='ml-2'>GRADIENTS</span>
                </h1>
                {
                    !address ? 
                <div className='md:justify-between justify-center flex mt-2 md:mt-0'>
                    <button onClick={doLogin} className='px-5 py-2 bg-white rounded-lg hover:bg-yellow-50 text-yellow-400 flex items-center'> LOGIN WITH METAMASK <FiLogIn  className='ml-2'/></button>
                </div>
                :
                <div className='md:justify-between justify-center flex mt-2 md:mt-0'>
                    <button onClick={disconnect} className='px-5 py-2 bg-white rounded-lg hover:bg-yellow-50 text-yellow-400 flex items-center'> DISCONNECT {truncateEthAddress(address)}</button>
                </div>
                }
            </div>
        </div>
    )
}
