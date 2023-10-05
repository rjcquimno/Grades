import React from 'react'

const RadioBox = ({onChange}) => {
  return (
     <div>
       <h3>Grade</h3>
       <div style ={{ display: 'flex', flexDirection: 'column'}}>
       <label><input type='radio' name="letter" value='A'  onChange={onChange}/>A</label>
       <label><input type='radio' name="letter" value='B+' onChange={onChange}/>B+</label>
       <label><input type='radio' name="letter" value='B' onChange={onChange}/>B</label>
       <label><input type='radio' name="letter" value='C+' onChange={onChange}/>C+</label>
       <label><input type='radio' name="letter" value='C' onChange={onChange}/>C</label>
        <label><input type='radio' name="letter" value='D' onChange={onChange}/>D</label>
       <label><input type='radio' name="letter" value='F' onChange={onChange}/>F</label>
       </div>
     </div>
  )
}

export default RadioBox
