import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios'

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate()
  
  const goToEmployee=(empObj)=>{
    //navigate to /employee
    navigate("/employee",{state:empObj});
  }
  const goToEditEmployee=(empObj)=>{
    //navigate to /edit
    navigate("/edit",{state:empObj})
  }
  const deleteByEmpId=async(id)=>{
      try {
      setLoading(true);
      const res = await axios.delete(
        `http://localhost:4000/employee-api/employee/${id}`
      );
      if (res.status === 200) {
        setEmps((prev) => prev.filter((emp) => emp._id !== id));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function getEmps() {
      let res = await fetch("http://localhost:4000/employee-api/employee");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }
    
  useEffect(() =>{
    getEmps();
  }, [] )

  return (
    <div>
      <h1 className="text-4xl text-center mb-5">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center shadow-2xl rounded-2xl">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            <div className="flex justify-around">
              <button onClick={()=>goToEmployee(empObj)} className="bg-blue-300 p-2 rounded-2xl text-white">View</button>
              <button onClick={()=>goToEditEmployee(empObj)} className="bg-yellow-500 p-2 rounded-2xl text-white">Edit</button>
              <button onClick={()=>deleteByEmpId(empObj._id)}className="bg-red-400 p-2 rounded-2xl text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;