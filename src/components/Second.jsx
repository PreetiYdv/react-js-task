import React from 'react'

const Second = ({data}) => {
  return (
      <>
          <div>
              <h2>data with props</h2>
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