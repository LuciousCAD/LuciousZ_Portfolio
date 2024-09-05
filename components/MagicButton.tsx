import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <div>
      <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
  <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C0C0C0_0%,#FFFAFA_50%,#FFFFFF_100%)]" />
  <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-5 text-sm font-medium text-white backdrop-blur-sm ${otherClasses}`}>
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
  </span>
</button>
    </div>
  )
}

export default MagicButton
