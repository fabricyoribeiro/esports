import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

import '../styles/main.css'



export function CreatAdBanner(){
  return (
    <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg  mt-8  overflow-hidden  mx-auto w-4/6
    sm:w-11/12
    md:w-11/12
    lg:w-10/12

    '>
        
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center sm:px-5 sm:py-5 sm:flex-col sm:gap-4
      md:px-5 md:py-5 md:flex-col md:gap-4
      lg:px-5 lg:py-5 lg:flex-col lg:gap-4
      gap-8
      '>
        <div>
          <strong className='text-2xl text-white font-black sm:text-lg '>Não encontrou seu duo?</strong>
          <span className='text-zinc-400 block sm:text-sm'>Publique um anúncio para encontrar novos players!</span>
        </div>
        <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3 sm:py-2 sm:px-3 sm:gap-2'>
          <MagnifyingGlassPlus size={24}/>
          Puclicar anúncio
        </Dialog.Trigger>

      </div>

    </div>
  )
}