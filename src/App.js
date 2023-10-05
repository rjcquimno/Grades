import './App.css';
import TextInput from './components/TextInput';
import RadioBox from './components/RadioBox';
import Header from './components/Header';
import Items from './components/Items';
import { useState } from 'react';



const courseDetails = [
  {id: 1, courseNo: '1',courseName: 'Science1', units: 3, grade: 'A', numGrade: 4},
  {id: 2, courseNo: '2',courseName: 'Math2', units: 1, grade: 'A', numGrade: 4},
  {id: 3, courseNo: '3',courseName: 'English3', units: 2, grade: 'A', numGrade: 4}
]

function App() {
  const [txtValue, setTxtValue] = useState('')
  const [form, setForm] = useState({
    courseNo: '',
    courseName: '',
    units: 0,
    grade: '',
    numGrade: 0,
  })
  
  const [data, setData] = useState(courseDetails)

const handleForm = (e) => setForm({...form, [e.target.id]: e.target.value})

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(form)

  setData([...data, {id: data.length+1 , courseNo: form.courseNo, courseName: form.courseName, units: form.units, grade: form.grade}])
}
  return (
    <div className="App">
      
        <form style={{display:'flex', flexDirection: 'column', gap: 10, marginBottom: 20}} onSubmit={handleSubmit}> 
        
          <label htmlFor='courseNo'>Course No:</label>
          <input  id='courseNo' type ='text' value={form.courseNo} onChange={handleForm}/>
          
        
          <label htmlFor='courseName'>Course Name:</label>
          <input  id='courseName' type ='text' value={form.courseName} onChange={handleForm}/>
          
        
          <label htmlFor='units'>Units:</label>
          <input  id='units' type ='number' value={form.units} onChange={handleForm}/>

          <RadioBox id='grade' value={form.grade} onChange={handleForm}/>


          <button type='submit'>Submit</button>
        </form>
          
          <table>
          <label>Search: </label><TextInput value={txtValue} onChange={(e) => setTxtValue(e.target.value)}/>
          <br/>
          <br/>
            <tbody>
            <Header/>
            
            <Items items = {data} query={txtValue}/>
            <tr>
            
              <td colSpan="2" style ={{textAlign: 'center' ,fontWeight:'bold'}}>Calculated Units and Grade(qpi*unit)</td>
              <td colSpan="1" style ={{fontWeight:'bold'}}>{data.reduce((total2, courseDetail) => {return total2 + parseInt(courseDetail.units)}, 0)}</td>
              <td colSpan="1" style ={{fontWeight:'bold'}}>{data.reduce((total1, courseDetail) => {return total1 + parseInt(courseDetail.numGrade)*courseDetail.units}, 0)}</td>
              
            </tr>
            <tr>
            
              <td colSpan="2" style ={{textAlign: 'center' ,fontWeight:'bold'}}>Total QPI</td>
              <td colSpan="2" style ={{textAlign: 'center' ,fontWeight:'bold'}}>4.0</td>
              
            </tr>


            </tbody>

          </table>
          
    </div>

    
  );
}

export default App;
