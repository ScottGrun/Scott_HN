import { cx } from 'classix'
import React, { FC } from 'react'

interface HeaderProps {
    className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={cx('bg-[#191A1F] h-[72px] p-4 flex items-center', className)}>
            <h2 className='mr-auto font-bold'>Hacker News</h2>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </header>
    )
}