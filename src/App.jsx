import './App.css'
import Coureses from './Component/Coureses'
import CourseDetails from './Component/CourseDetails'
import Header from './Component/Header'
function App() {
  return (
    <div className=' container mx-auto px-10 mt-10'>
      <Header></Header>
    <div className='flex justify-between gap-10 mt-10'>
      <Coureses></Coureses>
      <CourseDetails></CourseDetails>
    </div>
    </div>
  )
}

export default App
