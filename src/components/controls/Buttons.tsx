import React from 'react'
import "../../styles/Buttons.scss"

interface Props {
    label: string
}

const B1: React.FC<Props> = ({ label }) => {
  return (
    <div className="b1">{label}</div>
  )
}

const Buttons = { B1 }

export default Buttons;