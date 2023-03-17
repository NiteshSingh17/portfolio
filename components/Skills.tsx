import React from 'react'
import Container from './Container'
import { FiPenTool } from 'react-icons/fi'
import { FaCodepen, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { MdOutlineMonitor } from 'react-icons/md'
import { FromBottomAnimation, FromLeftAnimation, FromRightAnimation } from './Animation'


type StatsProps = {
    title?: string;
    value?: string;
};

type SkillItemProps = {
    title?: string;
    desc?: string;
    icon?: any;
    isLast?: boolean;
    isLight?: boolean;
}

export default function Skills() {


    return (
        <div id='work'>
            <Container className='pt-20 pb-20 bg-slate-900 min-h-96'>
                <div className='flex justify-between'>
                    <div>
                        <div className='text-slate-600'>
                            Contact For
                        </div>
                        <div className='mt-4 text-3xl font-bold'>
                            <div>Any Type of Query</div>
                            <div>& Discussion</div>
                        </div>
                    </div>
                    <div>
                        <div className='flex mt-4 max-w-lg'>
                            <div className='pr-4'>
                                <FaQuoteLeft />
                            </div>
                            <div className='text-3xl'>If you put a million monkeys at a million keyboards, one of them will eventually write a Java program. The rest of them will write Perl programs.
                            </div>

                            <div className='self-end'>
                                <FaQuoteRight />
                            </div>
                        </div>
                        <div className='text-md my-4 max-w-md text-slate-400'>

                        </div>
                        <div className='flex mt-20'>
                            <Stats title='Years Of Experience' value='2' />
                            <Stats title='Number Of Projects' value='15+' />
                        </div>
                    </div>
                </div>
            </Container>
            <SkillsSection />
        </div>
    )
}

const SkillsSection = () => {
    return (
        <div style={{ background: 'linear-gradient(180deg, #0f172a 50%, #1e293b -51%)' }}>
            <Container>
                <div className='flex items-stretch'>
                    <SkillItem icon={<FaCodepen />} title='Product Designer' desc="15+ projects" isLight={true} />
                    <SkillItem icon={<FiPenTool />} title='Problem Solver' desc="Good problem solving skills" />
                    <SkillItem icon={<MdOutlineMonitor />} title='Full Stack Developer' desc="Enjoy building backend and frontend" />
                </div>
            </Container>
        </div>
    )
}

const SkillItem = ({ title, desc, isLight, icon }: SkillItemProps) => {
    return (
        <div className='p-2 w-2/6'>
            <div className={'h-full px-10 pt-40 pb-10' + (isLight ? ' bg-orange-500' : ' bg-slate-700')}>
                <div className='flex'>
                    <div className='mr-4 text-3xl'>{icon}</div>
                    <div>
                        <div className={'text-white font-bold text-xl'} >{title}</div>
                        <div className={'text-sm ' + (isLight ? 'text-white' : 'text-slate-400')}>{desc}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Stats = ({ title, value }: StatsProps) => {
    return (
        <div className='flex items-end mr-10'>
            <div className='text-orange-600 text-5xl mr-3 text-bold'>{value}</div>
            <div className='w-20'>{title}</div>
        </div>
    )
}