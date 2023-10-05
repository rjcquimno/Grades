import React from 'react'

const Items = (props) => {
  return (
    <>
    
      {props.items
      .filter(item => item.courseNo)
      .filter(item => item.courseNo.toLowerCase().includes(props.query.toLowerCase()).map || item.courseName.toLowerCase().includes(props.query.toLowerCase())).map(item =>(
      <tr key={item.id}>
        <td>{item.courseNo}</td>
        <td>{item.courseName}</td>
        <td>{ `${item.units}`}</td>
        <td>{item.grade}</td>
      </tr>
    
  ))}
  </>
  )
}

export default Items
