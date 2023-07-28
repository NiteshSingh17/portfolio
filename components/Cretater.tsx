import React from 'react'
import Container from './Container'
import Button from './Button';
import { URLS } from './constant';

export default function CretaterOf() {
    return (
        <Container>
            <div className='bg-transparent py-20'>
                <h1 className='font-bold text-4xl'>Personal Projects</h1>
                <div className='flex mt-10'>
                    <div className='px-6 py-10 max-w-[500px] border-2 rounded-lg border-orange-400'>
                        <div>
                            <Avatar src={'/images/bitsmall.webp'}/>
                            <div className='mt-8 text-xl font-bold text-orange-400'>BitSmall</div>
                            <div className='text-slate-400'>BitSmall allows you to send gifs, images, videos and files on all webistes easily.</div>
                            <a href={URLS.bitsmall} target='_blank'><Button className='mt-4 w-full'>Show More</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

let Avatar = (props: { src: string }) => {
    const { src } = props;
    return <div className='w-[150px] h-[150px] rounded-[50%] overflow-hidden'>
       <img style={{ objectFit: 'cover' }} className='w-full h-full' src={src} />
    </div>
}