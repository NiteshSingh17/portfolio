import React from 'react'
import Button from './Button'
import Container from './Container'
import { FromLeftAnimation, FromRightAnimation } from './Animation'
import { BsArrowRightShort } from 'react-icons/bs'

export default function HeroSection() {
    return (
        <Container className='pt-20 pb-10 bg-slate-800 min-h-96'>
            <div>
                <div className='flex justify-between'>
                    <div className='w-100/2 p-2'>
                        <div className='font-bold text-8xl'>Nitesh</div>
                        <div className='font-bold text-8xl'>Singh.</div>
                        <div className='mt-5 w-40 p-0.5 bg-orange-600'></div>
                        <div className='mt-10 rounded-full overflow-hidden w-fit'>
                            <img alt='avatar' width={100} height={100} src='/images/avatar.jpg' />
                        </div>
                    </div>
                    <div className='w-100/2 p-2'>
                        <div className='flex'>
                            <div className='mr-4 font-bold text-2xl'>Services</div>
                            <div className='mr-4 font-bold text-2xl text-slate-600 hover:text-white'><a href='#work'>Works</a></div>
                            <div className='font-bold text-2xl text-slate-600 hover:text-white'><a href='#contact'>Contact</a></div>
                        </div>
                        <div className='mt-10'>
                            <div className='text-slate-600'>Introduction</div>
                            <div className='text-white font-bold text-3xl mt-3'>
                                <div>Software Developer and</div>
                                <div>Code enthusiast</div>
                                <div>In India.</div>
                            </div>
                            <div className='mt-10'>
                                <a href='mailto:niteshsingh1705@gmail.com'><FromLeftAnimation><Button className='flex items-center'>Contact Me <span className='ml-2 text-2xl'><BsArrowRightShort /></span></Button></FromLeftAnimation> </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}
