import { useNFTDrop } from '@thirdweb-dev/react';
import { BigNumber } from 'ethers';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAddress } from '@thirdweb-dev/react';
import toast, { Toaster } from 'react-hot-toast';

function MainSection() {
  const address = useAddress();
  const [claimedSupply, setClaimedSupply] = useState<number>(0);
  const [totalSupply, setTotalSupply] = useState<BigNumber>();
  const [loading, setLoading] = useState<boolean>(true);
  const [mintingIsOn, setMintingIsOn] = useState<boolean>(false);
  const [priceEth, setPriceEth] = useState<string>();


  const nftDropAddress = '0xd7D1ee62Ca3728Ff2DFA0FAE15a7655242b48997';
  const nftDrop = useNFTDrop(nftDropAddress);

  useEffect( () => {
    const fetchPrice = async () => {
      setLoading(true);
      const claimConditions = await nftDrop?.claimConditions.getAll();
      setPriceEth(claimConditions?.[0].currencyMetadata.displayValue);
      setLoading(false);
    }
    fetchPrice();
  } , [])
  
  useEffect( () => {
    const fetchNFTDropData = async () => {
      setLoading(true);
      const claimed = await nftDrop?.getAllClaimed();
      const total = await nftDrop?.totalSupply();
      setClaimedSupply(claimed?.length || 0);
      setTotalSupply(total);
      setLoading(false);
    }

    fetchNFTDropData();

  } , [])

  const mintNFT = () => {
    if (!nftDrop || !address) return;
    setMintingIsOn(true);
    const notification = toast.loading('Minting...', {
      style: {
        fontWeight: 'bolder',
        fontSize: '17px',
        padding: '20px 40px'
      }
    })
    const quantity = 1;
    nftDrop?.claimTo(address, quantity).then( async (tx) => {
      const receipt = tx[0].receipt;
      const claimedTokenId = tx[0].id;
      const claimedNFT = await tx[0].data();
      toast.success('You successfully Minted!', {
        duration: 8000,
        style: {
          fontWeight: 'bolder',
          fontSize: '17px',
          padding: '20px'
        }
      });
      console.log(receipt);
      console.log(claimedTokenId);
      console.log(claimedNFT);
      const imageUrl = claimedNFT.metadata.image
      setClaimedSupply(claimedSupply + 1);
      // const openSeaUrl = `https://testnets.opensea.io/assets/${nftDropAddress}/${claimedNFT.metadata.name}`
      // console.log(openSeaUrl)

    }).catch(err => {
      toast('Something went wrong!', {
        duration: 8000,
        style: {
          background: 'red',
          color: 'white',
          fontWeight: 'bolder',
          fontSize: '17px',
          padding: '20px'
        }
      });
    }).finally ( () => {
      setMintingIsOn(false);
      toast.dismiss(notification)
    })

  }

  return (
    <div className=' max-w-6xl mx-auto my-10 md:flex justify-between block'>
      {/* Toast */}
      <Toaster position="bottom-center" reverseOrder={false}/>

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
        {
          loading ? 
          <p className='text-md text-gray-300  text-center animate-pulse'>Loading Supply Count...</p>
          :
          <p className='text-md text-gray-300  text-center'>{claimedSupply} / {totalSupply?.toString()} NFT's claimed</p>
        }

        {/* {
          loading && (
            <img src='https://i.pinimg.com/originals/a4/f2/cb/a4f2cb80ff2ae2772e80bf30e9d78d4c.gif'/>
          )
        } */}
        
        {
          address ?  <p className='text-sm text-yellow-100  text-center'>Connected with {address} </p> : ''
        }
        <button onClick={mintNFT} disabled={!address || loading || claimedSupply === totalSupply?.toNumber()} className='h-16 w-full disabled:opacity-50 hover:shadow-yellow-100 hover:shadow-md rounded-full bg-gradient-to-bl from-yellow-200  to-yellow text-white mt-2'>
          
          { loading ? 
            'LOADING...'
            : claimedSupply == totalSupply?.toNumber() ? 'SOLD OUT'
            : !address ? 'SIGN IN TO MINT' 
            : mintingIsOn ? 'MINTING...'
            : <span className='font-bold'>MINT NFT ({priceEth} ETH)</span>}
        </button>
      </div>

      {/* right section */}

      <div className='md:w-[45%] md:flex flex-wrap justify-center pt-4 hidden'>
        <div className='border-4 h-[180px] overflow-hidden border-white border-opacity-20 rounded-md'>
          <Image className='' width={180} height={180} src={'/16.png'}></Image>
        </div>
        <div className='top-[20px] left-[18px] relative border-4 h-[180px] overflow-hidden border-white border-opacity-20 rounded-md'>
          <Image className='' width={180} height={180} src={'/5.png'}></Image>
        </div>
        <div className='top-[0px] relative border-4 h-[180px] overflow-hidden border-white border-opacity-20 rounded-md'>
          <Image className='' width={180} height={180} src={'/6.png'}></Image>
        </div>
        <div className='top-[20px] left-[18px] relative border-4 h-[180px] overflow-hidden border-white border-opacity-20 rounded-md'>
          <Image className='' width={180} height={180} src={'/7.png'}></Image>
        </div>
      </div>
      
    </div>
  )
}

export default MainSection