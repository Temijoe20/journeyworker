const Navbar = () => {
    return ( 
        <nav className="bg-yellow-600 text-white font-semibold flex justify-between py-3"><div className="px-20 flex"><svg data-slot="icon" 
        data-darkreader-inline-stroke="" fill="none" className="w-6 mr-3" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg> Opening hours: Mon-Sat 9:00-18:00</div>
        <div className="flex ml-48">
        <div className="flex">
          <svg data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" class="w-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path>
          </svg>+2347015300138</div>
      <div className="px-20 flex"><svg data-slot="icon" data-darkreader-inline-stroke="" fill="none" className="w-6 mr-3" stroke-width="1.5" stroke="currentColor" 
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" 
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
      </svg>
      call2fixteam@alphamead.com</div>
    </div></nav>
     );
}
 
export default Navbar;