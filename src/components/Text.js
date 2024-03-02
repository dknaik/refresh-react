import React, { memo } from 'react'

const Text = memo((props) => {
    const {children,text}=props
    console.log(text)
  return (
    <div>{text}</div>
  )
})

export default Text