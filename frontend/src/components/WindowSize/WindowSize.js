import React, { useState, useEffect } from 'react'

const WindowSize = ({ onSizeChange }) => {
  useEffect(() => {
    function handleResize() {
      const newWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      const newHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      onSizeChange({ width: newWidth, height: newHeight })
    }

    if (window.addEventListener('resize', handleResize)) {
      handleResize()
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [onSizeChange])

  return null
}

export default WindowSize
