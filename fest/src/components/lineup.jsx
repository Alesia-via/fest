export default function Lineup() {
  return (
    <section id="lineup" className="py-20 bg-white min-h-screen">
    <div className=" flex flex-col gap-12 max-w-[1200px] px-4 mx-auto">
        <div className="flex flex-col items-center p-4 mx-auto max-w-[700px]">
              <h2 className="text-4xl text-center font-bold mb-8">World-Class Lineup</h2>
              <p className="text-center text-gray-500 mb-12">Experience performances from Grammy winners, cultural ambassadors, and rising stars from around the globe.</p>
        </div>
        <div className="flex flex-col gap-8 mb-10">
            <h3 className="text-3xl text-center font-bold mb-8">Headliners</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-2 rounded-xl p-6 border shadow-lg hover:shadow-md">
                    <div className="flex justify-between items-start">
                        <span className="text-xs text-black bg-gray-200 px-3 py-1 rounded-2xl">Friday</span>      
                        <span className="text-xs text-black bg-white px-3 py-1 rounded-2xl border">Benin</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Angelique Kidjo</h4>
                    <p className="text-sm text-gray-500">Afrobeat</p>
                    <div className="flex items-center gap-1">
                        <img src="/img/clock.svg" alt="Clock" className="w-6 h-6 object-cover rounded-lg"/>
                        <span className="text-xs text-gray-00 ml-2">8:00 PM</span> 
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="/img/location-check.svg" alt="Location" className="w-6 h-6 object-cover rounded-lg"/>
                        <span className="text-xs text-gray-900 ml-2">Main Stage</span> 
                    </div>
                </div>
                <div className="flex flex-col gap-2 rounded-xl p-6 border shadow-lg hover:shadow-md">
                    <div className="flex justify-between items-start">
                        <span className="text-xs text-black bg-gray-200 px-3 py-1 rounded-2xl">Saturday</span>      
                        <span className="text-xs text-black bg-white px-3 py-1 rounded-2xl border">India</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Anoushka Shankar</h4>
                    <p className="text-sm text-gray-500">Indian Classical Music</p>
                    <div className="flex items-center gap-1">
                        <img src="/img/clock.svg" alt="Clock" className="w-6 h-6 object-cover rounded-lg"/>
                        <span className="text-xs text-gray-00 ml-2">7:30 PM</span> 
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="/img/location-check.svg" alt="Location" className="w-6 h-6 object-cover rounded-lg"/>
                        <span className="text-xs text-gray-900 ml-2">Main Stage</span> 
                    </div>
                </div>
                <div className="flex flex-col gap-2 rounded-xl p-6 border shadow-lg hover:shadow-md">
                    <div className="flex justify-between items-start">
                        <span className="text-xs text-black bg-gray-200 px-3 py-1 rounded-2xl">Sunday</span>      
                        <span className="text-xs text-black bg-white px-3 py-1 rounded-2xl border">Colombia</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Bomba Estéreo</h4>
                    <p className="text-sm text-gray-500">Cumbia Electrónica</p>
                    <div className="flex items-center gap-1">
                        <img src="/img/clock.svg" alt="Clock" className="w-6 h-6 object-cover rounded-lg"/>
                        <span className="text-xs text-gray-00 ml-2">6:00 PM</span> 
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="/img/location-check.svg" alt="Location" className="w-6 h-6 object-cover rounded-lg"/>
                        <span className="text-xs text-gray-900 ml-2">Main Stage</span> 
                    </div>
                </div>
            </div>
        </div>
        <div>
                <h3 className="text-3xl text-center font-bold mb-8">Featured Artists</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto ">
                     <div className="flex flex-col gap-2 rounded-xl p-4 border shadow-lg hover:shadow-md">
                         <div className="flex justify-between gap -3 items-start">
                         <h5 className="text-sm font-bold text-gray-900">Toumani Diabaté</h5>      
                         <span className="text-xs text-black bg-white px-2 py-0 rounded-2xl border">Mali</span>
                         </div>
                       <p className="text-sm text-gray-500">West African Kora</p>
                     </div>
                     <div className="flex flex-col gap-2 rounded-xl p-4 border shadow-lg hover:shadow-md">
                         <div className="flex justify-between gap -3 items-start">
                         <h5 className="text-sm font-bold text-gray-900">Yasmin Levy</h5>      
                         <span className="text-xs text-black bg-white px-2 py-0 rounded-2xl border">Spain</span>
                         </div>
                       <p className="text-sm text-gray-500">Ladino</p>
                     </div>
                     <div className="flex flex-col gap-2 rounded-xl p-4 border shadow-lg hover:shadow-md">
                         <div className="flex justify-between gap -3 items-start">
                         <h5 className="text-sm font-bold text-gray-900">Tash Sultana</h5>      
                         <span className="text-xs text-black bg-white px-2 py-0 rounded-2xl border">Australia</span>
                         </div>
                       <p className="text-sm text-gray-500">Psychedelic Soul</p>
                     </div>
                     <div className="flex flex-col gap-2 rounded-xl p-4 border shadow-lg hover:shadow-md">
                         <div className="flex justify-between gap -3 items-start">
                         <h5 className="text-sm font-bold text-gray-900">Fatoumata Diawara</h5>      
                         <span className="text-xs text-black bg-white px-2 py-0 rounded-2xl border">Mali</span>
                         </div>
                       <p className="text-sm text-gray-500">Afro-Folk</p>
                     </div>
                     <div className="flex flex-col gap-2 rounded-xl p-4 border shadow-lg hover:shadow-md">
                         <div className="flex justify-between gap -3 items-start">
                         <h5 className="text-sm font-bold text-gray-900">Nitin Sawhney</h5>      
                         <span className="text-xs text-black bg-white px-2 py-0 rounded-2xl border">UK</span>
                         </div>
                       <p className="text-sm text-gray-500">Electronic World</p>
                     </div>
                     <div className="flex flex-col gap-2 rounded-xl p-4 border shadow-lg hover:shadow-md">
                         <div className="flex justify-between gap -3 items-start">
                         <h5 className="text-sm font-bold text-gray-900">Jesse Cook</h5>      
                         <span className="text-xs text-black bg-white px-2 py-0 rounded-2xl border">Canada</span>
                         </div>
                       <p className="text-sm text-gray-500">Nuevo Flamenco</p>
                     </div>
                     <div className="flex flex-col gap-2 rounded-xl p-4 border shadow-lg hover:shadow-md">
                         <div className="flex justify-between gap -3 items-start">
                         <h5 className="text-sm font-bold text-gray-900">Rodrigo y Gabriela</h5>      
                         <span className="text-xs text-black bg-white px-2 py-0 rounded-2xl border">Mexico</span>
                         </div>
                       <p className="text-sm text-gray-500">Acoustic Rock</p>
                     </div>
                     <div className="flex flex-col gap-2 rounded-xl p-4 border shadow-lg hover:shadow-md">
                         <div className="flex justify-between gap -3 items-start">
                         <h5 className="text-sm font-bold text-gray-900">Omar Souleyman</h5>      
                         <span className="text-xs text-black bg-white px-2 py-0 rounded-2xl border">Syria</span>
                         </div>
                       <p className="text-sm text-gray-500">Syrian Electronic</p>
                     </div>
                     
                </div>
            </div>
        <button className="hidden md:inline-block bg-gray-900 max-w-[200px] mx-auto text-white px-4 py-2 rounded hover:bg-gray-700">Get Tickets</button>
    </div>
</section>
  );}