"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface MagnifyingGlassImageProps {
  src: string
  alt: string
  width: number
  height: number
  magnification?: number
}

export const MagnifyingGlassImage: React.FC<MagnifyingGlassImageProps> = ({
  src,
  alt,
  width,
  height,
  magnification = 1.5
}) => {
  return (
    <div
      className='w-full h-full overflow-hidden rounded-[16px]'
    >
      <motion.img
        src={src}
        alt={alt}
        className="rounded-[16px] object-cover w-full h-64"
        whileHover={{
          scale: magnification,
          transition: { duration: 0.3 }
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        dragElastic={0.05}
      />
    </div>
  )
}

