import React from 'react'

export const Contact = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-500">We're dedicated to providing you with exceptional support and guidance throughout your real estate journey.</h1>
          <p className="leading-relaxed mt-4"> Please feel free to reach out to us via the contact information below, or use the form to send us a message directly.</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-neutral-400 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Send</button>
          <p className="text-xs text-gray-500 mt-3">Send us an Email. </p>
        </div>
      </div>
    </section>
  )
}
