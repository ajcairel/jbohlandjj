import { useState } from "react";
export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false)


    function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
    
    function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
    })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }
  return (
    <section className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-40 w-full flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.2013482934167!2d-121.87909888409912!3d37.69147012471963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe9e8821b0119%3A0x872b5cb4a3fc965!2sRalph%20Gracie%20Pleasanton!5e0!3m2!1sen!2sus!4v1659405783948!5m2!1sen!2sus" 
          />
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div className="border-double border-2 border-red-500">
          <h2 className="p-2 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className=" leading-relaxed mb-5">
            Shoot me a message and let's work! 
          </p>

          </div>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-4=700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            id="contact"
            type="submit"
            className="text-white bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}