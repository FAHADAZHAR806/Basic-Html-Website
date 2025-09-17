import React from "react";

export default function Contact() {
  return (
    <>
      <div className="w-full max-w-6xl m-auto py-10">
        <h1 className="text-2xl text-center">Send Me a Message</h1>
        <p className="text-center py-4">
          Please fill in the form below to get in touch with me.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            name=""
            placeholder="Enter First Name"
            className="p-2 border-1 "
            id=""
          />
          <input
            type="text"
            name=""
            placeholder="Enter LastName"
            id=""
            className="p-2 border-1"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            className="p-2 border-1 my-2"
          />
          <input
            type="tel"
            name=""
            id=""
            placeholder="Enter your phone number "
            className="p-2 border-1 my-2"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your messgae here"
            className="py-10 px-20 border-1 my-2"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">I have reads all terms and condition</label>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button type="submit" className="py-2 px-6 border-1">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
