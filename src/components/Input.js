import React from 'react'

const Input = (props) => {
    const { label, onWrite, v, number = false } = props

    const test = (e) => {
        if(number && Number.isNaN(parseInt(e.target.value))){
            return
        }
        onWrite(number 
            ? parseInt(e.target.value) 
            : e.target.value)
    }

    return (
        <div>
            {label}
            <input value={v} type="text" onChange={test} />
        </div>
    )
}

export default Input