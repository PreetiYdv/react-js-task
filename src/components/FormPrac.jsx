import React, { useState } from "react";

const FormPrac = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    lastName: "",
    contact: "",
    gender: "",
    course: "",
  });
  const handleSubmit = (e) => {
    console.log(formData, "formData");
    e.preventDefault();
  };
  return (
    <>
      <section className=" h-screen flex justify-center flex-col items-center bg-[#10111A]">
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
              />
              <input
                className="py-1 px-2 bg-transparent text-white border-b outline-none"
                type="text"
                placeholder="LastName"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                }}
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
              />
              <select
                name="gender"
                id="gender"
                className="w-full bg-transparent text-white outline-none border-b"
                value={formData.gender}
                onChange={(e) => {
                  setFormData({ ...formData, gender: e.target.value });
                }}
              >
                <option selected disabled hidden>
                  Gender
                </option>
                <option value="male" className="text-black">
                  Male
                </option>
                <option value="Female" className="text-black">
                  Female
                </option>
              </select>
            </div>
            <p className="text-white">Course</p>
            <div className="flex gap-5">
              <div>
                <input
                  type="radio"
                  name="course"
                  id="course"
                  value="FrontEnd"
                  onChange={(e) => {
                    setFormData({ ...formData, course: e.target.value });
                    console.log(e.target.value);
                  }}
                />
                <label
                  htmlFor="course"
                  className="text-white ms-1 cursor-pointer"
                  value="FrontEnd"
                >
                  FrontEnd
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="course"
                  id="course2"
                  value="React developer"
                  onChange={(e) => {
                    setFormData({ ...formData, course: e.target.value });
                    console.log(e.target.value);
                  }}
                />
                <label
                  htmlFor="course2"
                  className="text-white ms-1 cursor-pointer"
                >
                  React Developer
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="border py-1 px-4 text-lg text-white rounded-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormPrac;
