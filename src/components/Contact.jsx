import React, { useState } from "react";
import "../css/contact.css";

export default function Contact() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var emailPat = /\S+@\S+\.\S+/;
    if (!emailPat.test(data.email)) {
      return setError("enter valid email address ");
    }
    try {
      setSuccess(null);
      setLoading(true);
      setError(null);
      const res = await fetch("/api/customer/add-customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const data2 = await res.json();
      if (data2.success == false) {
        setLoading(false);
        return setError(data2.message);
      } else {
        setLoading(false);
        setSuccess(data2.message);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div id="contact" className="max-w-5xl w-[80%] mx-auto mb-20 lg:mb-32">
      <h2 className="heading ">Contact</h2>
      <h3 className=" text-justify mb-2 text-lg text-slate-800">
        Reach Out, We're Here for You.
      </h3>
      <p className=" mb-6">
        Feel free to reach out to us anytime! Whether you have questions,
        feedback, or are interested in collaborating, we're here to assist you.
        Drop us a message, and we'll get back to you promptly, ready to help in
        any way we can.
      </p>
      <div className="flex max-w-4xl mx-auto flex-col md:flex-row">
        <img
          src="./contact-img.png"
          alt="contact image"
          className="w-full md:w-1/2 object-cover "
        />
        <form
          action="/submit_form"
          method="post"
          className="w-full md:w-1/2 rounded-md bg-white flex flex-col gap-4 justify-between p-4"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} />
          </div>
          <div className="row">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="contact-number">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contact-number"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="rounded-md bg-red-100 border-none"
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="submit">
            { !loading ? "Send Message" : "Loading ..."}
          </button>
          <span className="text-red-400 text-sm">{error && error }</span>
          <span className="text-green-400 text-sm">{success && success }</span>
        </form>
      </div>
    </div>
  );
}
