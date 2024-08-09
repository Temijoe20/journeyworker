// import Cards from "./component/Cards";
// import { useState } from "react";
// export default function Home() {
 //  const [show, setShow] = useState(false);
 //  return (
 //    <div>
 //      <main className="min-h-screen bg-gray-900">
//         <section class=" text-white py-5">
 //          <div class="container mx-auto px-20">
//             <div class="flex items-center justify-center">
//               <button class="text-white text-5xl border-2 bg-transparent hover:bg-gray-900 hover:text-yellow-700 text-center mt-5 px-3 py-4 mb-10 font-bold">
//              Our Services
//             </button>
//           </div>
//          </div>
//         </section>
 //      </main>
//    </div>
//   );
// }
import React from "react"
export default function Home() {
    return(
<div className="min-h-screen bg-screen bg-[url('/img/background_engineeringtools.jpg')] bg-center bg-cover">
  <div className="text-white py-48 px-20">
    <h1 className="text-6xl font-semibold leading-normal">Service Providers</h1>
    <p className="font-semibold">Register their buisness app. Suppliers will also upload their products in the app's market place.</p>
    <button className="bg-yellow-500 px-3 py-3 font-semibold mt-6">Read More</button>
  </div>
</div>
    )
}