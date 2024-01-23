import React, { useState } from "react";

const ToDo = ({text}) => {
  const [newArray, setNewArray] = useState([]);
  const [updateIndex,setUpdateIndex]=useState()
  const [formData, setFormData] = useState({
    FirstName: "",
    lastName: "",
    contact: "",
    email: "",
  });
  const handleSubmit = (e) => {
    console.log(formData, "formData");
    e.preventDefault();
    setFormData({
      FirstName: "",
      lastName: "",
      contact: "",
      email: "",
    });
    // ========= update data ==============
    if (updateIndex !== undefined) {
      const updatedData = [...newArray];
      console.log(updatedData,"jnjnjnj");
      updatedData[updateIndex] = { ...formData };
      setNewArray(updatedData);
      setUpdateIndex(undefined); // Reset updateIndex after updating
    } else {
      // Otherwise, add a new row
      setNewArray((prevData) => [...prevData, { ...formData }]);
    }
  };
  // delete row
  const deleteRow = (index) => {
    let newArr = [...newArray];
    newArr.splice(index, 1);
    setNewArray([...newArr]);
  };
  // UpdateRow
  const UpdateRow = (obj,i) => {
    setFormData(obj)
    setUpdateIndex(i)
    console.log(obj,i,newArray[i], "formdataformdataformdata")
  }

  return (
    <>
      <section className=" h-screen flex justify-center flex-col items-center bg-[#10111A]">
        <p className="text-white">{text } </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center rounded-md border bg-white/5 backdrop-blur-md  gap-5 px-20 py-10">
            <div className="flex gap-5">
              <input
                className="py-1 px-2 bg-transparent text-white border-b outline-none"
                type="text"
                placeholder="FirstName"
                value={formData.FirstName}
                onChange={(e) => {
                  setFormData({ ...formData, FirstName: e.target.value });
                }}
                required
              />
              <input
                className="py-1 px-2 bg-transparent text-white border-b outline-none"
                type="text"
                placeholder="LastName"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                }}
                required
              />
            </div>
            <div className="flex gap-5">
              <input
                className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                type="number"
                placeholder="Contact"
                value={formData.contact}
                onChange={(e) => {
                  setFormData({ ...formData, contact: e.target.value });
                }}
                required
              />
              <input
                className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                required 
              />
            </div>
            <button
              type="submit"
              className="border py-1 px-4 text-lg text-white rounded-xl"
            >
              Submit
            </button>
          </div>
        </form>
        {newArray.length > 0 ? (
          <>
            <table className=" border-[2px] mt-3">
              <thead>
                <tr className="border-[2px]">
                  <th className="px-5 text-white p-3 border-[2px]">
                    FirstName
                  </th>
                  <th className="px-5 text-white border-[2px]">lastName</th>
                  <th className="px-5 text-white border-[2px]">contact</th>
                  <th className="px-5 text-white border-[2px]">email</th>
                  <th className="px-5 text-white border-[2px]">Action</th>
                </tr>
              </thead>
              {newArray.map((obj, i) => {
                return (
                  <>
                    <tbody>
                      <tr className="border-[2px]" key={i}>
                        <td className="px-5 text-white p-3 border-[2px]">
                          {obj.FirstName}
                        </td>
                        <td className="px-5 text-white border-[2px]">
                          {obj.lastName}
                        </td>
                        <td className="px-5 text-white border-[2px]">
                          {obj.contact}
                        </td>
                        <td className="px-5 text-white border-[2px]">
                          {obj.email}
                        </td>
                        <td className="px-5 text-white border-[2px]">
                          <button onClick={() => { deleteRow(i) }} className="bg-red-600 px-2 py-1 rounded-3xl me-4">Delete</button>
                          <button onClick={() => { UpdateRow(obj,i) }} className="bg-green-600 px-2 py-1 rounded-3xl">Update</button>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </table>
          </>
        ) : (
          ""
        )}
      </section>
    </>
  )
}

export default ToDo