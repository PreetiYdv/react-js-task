//To save items in local storage :- localstorage.Setitem("keyName",value)
// To get the saved items :- localStorage.getItem("keyName")
// To remove an item permanently :- localStorage.removeItem("keyName")

// login and logout form
//  on click login :- form open - email, password, submit
//  submit btn onclick => local storage - islogin -> true 
//  if(localStorage.isLogin == "true"){btn = log out}
//  else {btn=log in }

import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const LocalStoragePrac = () => {
  const [isLogIn, setIsLogIn] = useState(false)
  const [formData, setFormData] = useState({
    Email: "",
    password: "",
  });
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogIn(true);
    console.log(formData, "formData");
    localStorage.setItem("isLogin", "true");
    setFormData({
      Email: "",
      password: "",
    });
    navigate('/')
  };
  // const handleLogin =()=>{
  //   setForm(true);
  //   // localStorage.setItem("isLogin", "false");
  // }
  // const handleLogOut =()=>{
  //   localStorage.removeItem("isLogin");
  //   // localStorage.setItem("isLogin", "false");
  //   setIsLogIn(false); 
  // }
  console.log(localStorage.isLogin)

  return (
    <>
      <section className=" h-screen flex justify-center flex-col items-center bg-[#10111A]">
        {/* <div className="flex gap-5 mb-12">
          {localStorage.getItem("isLogin") ? 
          <button onClick={handleLogOut} 
          className="border py-1 px-4 text-lg text-white hover:bg-white hover:text-black transition-all duration-300 rounded-xl"
          >Log Out</button>
            : <button onClick={handleLogin} 
            className="border py-1 px-4 text-lg text-white hover:bg-white hover:text-black transition-all duration-300 rounded-xl">
              Log in</button>
          }
        </div> */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center rounded-md border bg-white/5 backdrop-blur-md  gap-5 px-20 py-10">
              <div className="flex gap-5">
                <input
                  className="py-1 px-2 bg-transparent text-white border-b outline-none"
                  type="Email"
                  placeholder="Email"
                  value={formData.Email}
                  onChange={(e) => {
                    setFormData({ ...formData, Email: e.target.value });
                  }}
               required />
                <input
                  className="py-1 px-2 bg-transparent text-white border-b outline-none"
                  type="password"
                  placeholder="password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                  required />
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
  )
}

export default LocalStoragePrac