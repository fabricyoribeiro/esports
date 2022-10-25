import * as Dialog from '@radix-ui/react-dialog'
import {useKeenSlider} from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg'
import { GameBanner } from './components/GameBanner';
import { CreatAdBanner } from './components/createAdBanner';
import { useState, useEffect } from 'react';
import { Input } from './components/Form/input';
import { CreateAdModal } from './components/createAdModal';
import axios from 'axios';

interface Game{
  id: string;
  title: string;
  banner: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 0px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 300px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 500px)": {
        slides: { perView: 4, spacing: 5 },
      },
      "(min-width: 800px)": {
        slides: { perView: 5, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 6, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })



  return (
    <div 
    className='max-w-[1344px] mx-auto flex flex-col items-center my-8 
    sm:my-10
    md:my-10
    lg:my-10
    '>
      <img 
      src={logoImg} 
      alt="" 
      className='sm:w-3/5 md:w-3/5 lg:w-3/5 max-w-[300px]'
      />
      <h1 className='text-6xl text-center text-white font-black mt-16 
      sm:text-3xl sm:mt-8
      md:text-4xl md:mt-10
      lg:text-[40px] lg:mt-10
      xl:text-5xl xl:mt-12'
      >Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui</h1>

      <div  ref={sliderRef}  className='grid grid-cols-6 gap-6 mt-16  px-12 max-w-[1200px] sm:gap-2 sm:mt-10 md-mt-10
      keen-slider 
      '>

        {games.map(game => {
          return (
            <GameBanner 
              key={game.id}
              title={game.title} 
              bannerUrl={game.banner} 
              adsCount={game._count.ads}   
              
              
            />

          )
        })}



      
      </div>
      <Dialog.Root>

        <CreatAdBanner />

        <CreateAdModal />
      
      </Dialog.Root>

          
    </div>

  )
}

export default App
