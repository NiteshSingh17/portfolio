import React from 'react'
import Container from './Container'
import { FiMail } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { FromBottomAnimation } from './Animation'

type IconProps = {
    icon: any
}

export default function Footer(props: any) {
    return (
        <Container className='py-30 bg-slate-800'>
            <div id='contact' className='flex justify-end items-center py-20'>
                <div>
                    <div className='flex items-center'>
                        <div className='mr-3 text-2xl flex items-center'>
                            <a href='mailto:niteshsingh1705@gmail.com'><IconAvatar icon={<FiMail />}/></a>
                            {/* <div className='ml-3 text-lg'>niteshsingh1705@gmail.com</div> */}
                        </div>
                        <div className='text-2xl flex items-center'>
                            <a href='https://www.linkedin.com/in/nitesh-singh-533208201'><IconAvatar icon={<AiFillLinkedin />}/></a>
                            {/* <div className='ml-3 text-lg'>niteshsingh1705@gmail.com</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}



const IconAvatar = ({ icon } : IconProps) => {
    return (
        <FromBottomAnimation>
        <div className='shadow-xl flex items-center justify-center w-12 h-12 rounded-xl bg-orange-600 font-bold text-white'>
            {icon}
        </div>
        </FromBottomAnimation>
    )
}
