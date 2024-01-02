import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div>
            <section>
                <div className='grid grid-cols-1 lg:gird-cols-12'>
                    <div className="col-span-7 place-self-center">
                        <h1 className='text-white text-4xl lg:text-6xl font-extrabold'>
                            Hello, I'm Saurav!
                        </h1>
                        <p className='text-[#ADB7BE] text-lg lg:text-xl py-4'>
                            This is 24K speaking... come in.
                        </p>
                    </div>

                    <div className="col-span-5 place-self-center">
                        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
                                <Image
                                src = "/images/headshot.png"
                                alt='Hero Image'
                                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                                width={300}
                                height={300}
                                />
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default HeroSection 