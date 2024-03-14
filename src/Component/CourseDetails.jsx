import { totalCredit } from "../App";
const CourseDetails = ({detail}) => {
    console.log(detail);
    return (
        <div className='h-1/4 ml-5 mr-3 rounded-xl p-6 bg-white space-y-3' >
            <div><h1 className="text-lg text-blue-600 font-bold ">Credit hours
             remaining: {totalCredit -  detail.reduce((p,c)=> p+c.credit, 0) } </h1></div>
            <div className="divider-vertical border-b-2"> </div>
            <div><h1  className="text-xl font-bold ">Course Name --</h1>
                <div>
                    {detail.map((c, idx) => <ul className="list-decimal" key={c.id}>
                        <li> {c.name}</li>
                    </ul>)}
                </div>
            </div>
            <div className="divider-vertical border-b-2"> </div>
            <div><h1  className="text-xl font-bold ">total credit hours 
            {detail.reduce((p,c) => p+c.credit ,0)} </h1></div>
            <div className="divider-vertical border-b-2"> </div>
            <div><h1  className="text-xl font-bold ">total price: {
                detail.reduce((p,c)=> p+c.price, 0)
            } <span className="pl-2">usd</span> </h1> </div>
        </div>
    );
};

export default CourseDetails;