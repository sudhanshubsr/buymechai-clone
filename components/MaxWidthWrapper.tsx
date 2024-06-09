import React, {ReactNode} from 'react'
import {cn} from '@/lib/utils'

type MaxWidthWrapperProps = {
    className?: string
    children: ReactNode
}
const MaxWidthWrapper = ({className, children}:MaxWidthWrapperProps) => {
  return (
    <div className={cn('bg-background h-full mx-auto w-full', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper

