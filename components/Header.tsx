import { Bars3Icon } from '@heroicons/react/24/outline'
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
                <Bars3Icon className='w-8' />
            </button>
        </header>
    )
}