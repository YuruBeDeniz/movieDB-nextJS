import React from 'react'

type GridProps = {
  title: string
  children: React.ReactNode
  className?: string
}

const Grid = (props : GridProps) => {
  const { title, children, className } = props
  return (
    <div className={className}>
      <h2 className='text-xl font-bold pb-4'>
        {title}
      </h2>
      <div className='grid grid-cols-auto-fill gap-8'>{children}</div>
    </div>
  )
}

export default Grid


//we have created a custom grid in tailwind.config.js file and we use it here 

//every children that we pass into this component will be inside of the grid