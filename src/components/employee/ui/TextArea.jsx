import React from 'react'

export const TextArea = ({rows, name,value, onChange, type, className}) => {

    const textAreaProp = {
        rows: rows || "",
        type: type || "",
        className: className || "",
        name: name || "",
        value: value || "",
        onChange: onChange || (() => {}),
    }

  return (
    <>

        <textarea {...textAreaProp}></textarea>

    </>
  )
}
