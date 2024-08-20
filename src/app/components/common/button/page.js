import React from 'react'

function Button(props) {
  return (
    <>
                              <a href={props.href} className="text-xl rounded-full font-semibold px-7 border border-2 border-primary me-4 py-2 text-primary hover:border-btn-hover hover:bg-btn-hover hover:text-white">
                                     {props.text}
                              </a>
    </>
  )
}

export default Button