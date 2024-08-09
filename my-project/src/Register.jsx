import React from "react"
export default function Register() {
    return(
    <div className="flex bg-yellow-600 px-20 py-5 justify-between">
      <div>
        <h2 className="text-white text-4xl font-bold leading-normal">Register as Service Provider & Start Earning</h2>
        <p className="text-white font-semibold text-2xl">Increase transactions, acquire new customers - no marketing budget needed.</p>
      </div>
        <div className="">
          <div><button className=" py-3 px-10 font-semibold hover:bg-gray-900 text-2xl  border-gray-800 hover:text-white duration-300 hover:border border mt-2">Start Earning</button></div>
        </div>
      </div>
    )
}