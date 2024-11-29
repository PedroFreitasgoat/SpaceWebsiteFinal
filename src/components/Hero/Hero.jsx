import React from 'react'
import MountainImg from '../../assets/moon-surface-hd.png'

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='space-y-4 lg:pr-36'>
                <h1 className='text-5xl font-bold uppercase'>Orbite ThE Earth</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                    elit. Modi ipsa quos cumque enim a culpa, 
                    repellat non nesciunt libero quas. 
                    Maiores eum itaque, blanditiis quisquam 
                    similique facere facilis velit at.</p>
                    <button className='primary-button'>Learn More</button>
            </div>
            <div></div>
        </div>
      </div>
      {/* surgace section */}
      <img src={MountainImg} alt="" 
      className='absolute right-0 bottom-0 w-full brightness-50 z-10'/>
      {/*bottom gradient section */}
      <div className='aboslute inset-0 bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px]
      sm:-[50px] md:[60px]'>

      </div>
    </div>
  ) 
}

export default Hero
