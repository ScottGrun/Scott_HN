
import { cx } from 'classix'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

interface NavItemProps {
    href: string
    children: React.ReactNode
}

export const NavItem: FC<NavItemProps> = ({ href, children }) => {
    const pathname = usePathname()
    return (
        <Link href={href} className={cx('flex gap-3 items-center p-3 font-medium hover:bg-[#2C2E3B] hover:text-white rounded-[5px] text-[#C2C2C2]', pathname === href && "bg-[#2C2E3B] text-white")}>
            {children}
        </Link>
    )
}