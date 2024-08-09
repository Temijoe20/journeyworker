import React from "react";
export default function Body() {
    return(

<div className="flex flex-row">
    <div className="px-20 w-2/3">
  <h1 className="text-3xl font-bold text-yellow-500 py-5">WHO WE ARE</h1>
  <p className="font-semibold">We can connect you to professional building repairs artisans closest to you anytime, anywhere. Like Uber, once
    you make a request, we will send you professional artesian(s) closest to you from our large pool of well-trained, 
    pre-qualified, and service oriented artisans. 
    Call2Fix provides you with secure, safe, convenient, and reliable home and office repair services from the comfort of your phone.
  </p>
  <h1 className="text-3xl font-bold text-yellow-500 py-5">OUR MAIN FEATURES</h1>
  <P><h1 className="font-bold text-gray-800">Backed by Alpha Mead:</h1> Nigeria’s first FM Company Certified to 
    ISO 9001:2015 by United Kingdom Accreditation Services (UKAS).</P>
  <P><h1 className="font-bold text-gray-800">Security and safety:</h1>All artisans are screened on three levels 
      and will have unique identification numbers that customer can use to verify them.</P>
  <P><h1 className="font-bold text-gray-800">User rating system:</h1>Assigns jobs based on pre-defined criteria such as customer satisfaction
      and completed jobs</P>
  <P><h1 className="font-bold text-gray-800">24/7 Support:</h1>Round the clock experience center available to users in need of guidance or re-work
    from service provider.</P>
</div>
<div className="w-1/3 h-1/3">
  <img className="h-3/4 border border-solid" src="./img/about_image.jpg" alt="" srcset="" />
</div>
  </div>
  )
}