import { FaDollarSign } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
const Course = ({course, details}) => {
    // console.log(course);
    const {id, name, description, photo, price, credit} = course
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-2 pt-5">
    <img  src={photo} alt="Shoes" className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center spacey-3 ">
    <h2 className="card-title font-bold">{name}</h2>
    <p>{description}</p>
    <div className="flex justify-between space-x-12 ">
        <p className="flex items-center"> <FaDollarSign></FaDollarSign>price: {price}</p>
        <p className="flex items-center"> <FaBookOpen></FaBookOpen>credit: {credit}</p>
    </div>
    <div className="w-full">
      <button onClick={ ()=> details(course, id)} className="btn  w-full btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;