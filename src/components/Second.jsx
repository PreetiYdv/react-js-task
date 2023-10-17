import React from 'react'

const Second = ({data}) => {
  return (
      <>
          <div>
              {data.map((item, i) => {
                  return (
                      <p key={i}>{item} </p>
                  )
              })}
          </div>  
    </>
  )
}

export default Second