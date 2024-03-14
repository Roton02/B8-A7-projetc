import { useState } from 'react'
import './App.css'
import Coureses from './Component/Coureses'
import CourseDetails from './Component/CourseDetails'
import Header from './Component/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
export const totalCredit = 15;
function App() {
  
  const [detail, setDetail] =useState([])
 const details = (details, id) =>{
  const credit = detail.reduce((p,c) => p+c.credit, 0);
  if(credit + details.credit > totalCredit){
   return alert('R hobe na monu ')
  }
  const alrearyAxist = detail.find(d=>d.id === id)
  if (alrearyAxist) {
   return 
  }
  const newDetails = [...detail, details]
    setDetail(newDetails)
    toast("Wow so easy!");
 }
//  console.log(detail);
  return (
    <div className=' container mx-auto  mt-10 bg-gray-100'>
      <Header></Header>
    <div className='flex justify-between mt-10'>
      <Coureses details={details}></Coureses>
      <CourseDetails detail={detail} ></CourseDetails>
    </div>
    <ToastContainer />
    </div>
  )
}

export default App
