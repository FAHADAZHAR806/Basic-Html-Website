import React from "react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert("Please fill all required fields");
    } else {
      alert("Message Submitted Successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <>
      <div className="grid md:grid-cols-1 max-w-5xl m-auto bg-[#161616] text-white justify-items-center items-center lg:grid-cols-2   lg:px-4 ">
        <div className=" px-16 py-6 sm:grid-cols-2 justify-items-center  md:py-6 lg:justify-items-start ">
          <h1 className="text-3xl font-bold"> GET IN TOUCH</h1>
          <hr className="text-[#F50D32] border px  w-22 my-2 " />

          <p className="text-center lg:text-left">
            Feel free to reach out if you have any questions,or just want to
            connect.Looking forward to hearing from you!
          </p>
        </div>
        <div className=" ">
          <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-4">
            <div className="grid grid-cols-1 gap-1 ">
              <p>Name</p>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#343434] "
                placeholder="Your Name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="grid grid-cols-1 gap-1 justify-items-start">
              <p>Email</p>
              <input
                type="email"
                name=""
                id=""
                className="bg-[#343434]"
                placeholder="Your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="grid grid-cols-1 gap-1 justify-items-start">
              <p>Phone Number</p>

              <input
                type="tel"
                name=""
                id=""
                className="bg-[#343434]"
                placeholder="Your Mobile Number"
              />
            </div>
            <div className="grid grid-cols-1 gap-1 justify-items-start">
              <p>Subject</p>
              <input type="text" name="" id="" className="bg-[#343434]" />
            </div>
          </div>
          <div className="grid pt-4   sm:grid-cols-1 gap-4 ">
            <p>Message</p>
            <textarea
              name=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id=""
              className="bg-[#343434] w-full h-26"
              placeholder="Type your message here...."
              required
            ></textarea>
            <button
              className=" bg-[#F50D32] py-2 px-4 rounded-xl w-40"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
