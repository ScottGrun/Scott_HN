"use client"
import React, { FC } from 'react'
import { cx } from 'classix'
import { NavItem } from './NavItem'
import { BeakerIcon, BriefcaseIcon, FireIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/24/outline'


interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    return (
        <aside className={cx('bg-[#171A21] min-h-screen p-6', className)}>
            <h2 className='font-bold text-2xl'>Hacker News</h2>
            <nav className='mt-12'>
                <ul>
                    <li>
                        <NavItem href="/topstories">
                            <FireIcon className='w-5' />
                            Top Stories
                        </NavItem>
                    </li>
                    <li>
                        <NavItem href="/beststories">
                            <StarIcon className='w-5' />
                            Best Stories
                        </NavItem>
                    </li>
                    <li>
                        <NavItem href="/newstories">
                            <StarIcon className='w-5' />
                            New Stories
                        </NavItem>
                    </li>
                    <li>
                        <NavItem href="/askstories">
                            <QuestionMarkCircleIcon className='w-5' />
                            Ask HN
                        </NavItem>
                    </li>
                    <li>
                        <NavItem href="/showstories">
                            <BeakerIcon className='w-5' />
                            Show HN
                        </NavItem>
                    </li>
                    <li>
                        <NavItem href="/jobstories">
                            <BriefcaseIcon className='w-5' />
                            Job Postings
                        </NavItem>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}