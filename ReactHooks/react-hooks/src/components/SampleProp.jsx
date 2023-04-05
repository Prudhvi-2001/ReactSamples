import React from 'react'

function SampleProp(props) {
    const {id,name,...inputProps}=props
  return (
    <div>
        <p>
            {
                id
            }
        </p>
      
    </div>
  )
}

export default SampleProp
