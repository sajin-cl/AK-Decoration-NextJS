import { cn } from '@/lib/utils'
import React from 'react'

const Button = ({ children, className, ...props }) => {

    return (
        <button
            className={cn(
                'relative text-black text-sm hover:cursor-pointer',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;