import "keen-slider/keen-slider.min.css"

interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps){
  return(
    <a href="" className='relative rounded-lg overflow-hidden  keen-slider__slide  block '  >
    <img src={props.bannerUrl} alt="" className="w-full"/>

    <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
      <strong className='font-bold text-white block'>{props.title}</strong>
      <span className='text-zinc-300 text-sm block'>{props.adsCount} anúncio(s)</span>
    </div>

    </a>
  )
}