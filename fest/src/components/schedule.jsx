import { useState } from "react";


export default function Schedule() {
 const [activeDay, setActiveDay] = useState("saturday");

 const handleDayClick = (day) => {
  setActiveDay(day);
};

  return (
<section id="schedule" className="bg-gray-100 min-h-screen py-20 px-4">
    <div>
        <div className="flex flex-col">
            <h2 className="text-4xl text-center font-bold mb-8">Festival Schedule</h2>
            <p className="text-center text-gray-500 mb-12">Three days of non-stop cultural performances across multiple stages.</p>
        </div>
        <div className="flex flex-col max-w-[1200px] mx-auto mb-8">      
            <div className="grid grid-cols-3 gap-4 mb-8 bg-gray-200 px-2 py-1 rounded-xl">
                <button data-state="inactive" data-day="friday" 
                 data-state={activeDay === "friday" ? "active" : "inactive"}
                 onClick={() => handleDayClick("friday")} 
                 className="bg-transparent data-[state=active]:bg-white p-1 rounded-2xl text-center text-xs text-black ">Friday, July 15</button>
                <button data-state="active" data-day="saturday" 
                 data-state={activeDay === "saturday" ? "active" : "inactive"}
                 onClick={() => handleDayClick("saturday")} className="bg-transparent data-[state=active]:bg-white p-1 rounded-2xl text-center text-xs text-black ">Saturday, July 16</button>
                <button data-state="inactive" data-day="sunday" 
                 data-state={activeDay === "sunday" ? "active" : "inactive"}
                 onClick={() => handleDayClick("sunday")} className="bg-transparent data-[state=active]:bg-white p-1 rounded-2xl text-center text-xs text-black ">Sunday, July 17</button>
            </div>
            <div data-state="inactive" data-day="friday" 
             data-state={activeDay === "friday" ? "active" : "inactive"} className="data-[state=inactive]:hidden data-[state=active]:flex flex-col gap-4">
                
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">11:00 AM</span>
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Indian Classical Ensemble</h5>
                              <p className="text-xs text-gray-500">Classical</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-blue-800 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Cultural Stage</span>
                        </div>           
                    </div>
                </div>

                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">12:00 AM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Toumani Diabaté</h5>
                              <p className="text-xs text-gray-500">West African Kora</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-green-600 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">World Stage</span>
                        </div>           
                    </div>
                </div>
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">1:00 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Yasmin Levy</h5>
                              <p className="text-xs text-gray-500">Ladino</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-blue-800 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Cultural Stage</span>
                        </div>           
                    </div>
                </div>
              
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">3:00 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Fatoumata Diawara</h5>
                              <p className="text-xs text-gray-500">Afro-Folk</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-black text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Main Stage</span>
                        </div>           
                    </div>
                </div>
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">6:30 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Jesse Cook</h5>
                              <p className="text-xs text-gray-500">Nuevo Flamenco</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-blue-800 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Cultural Stage</span>
                        </div>           
                    </div>
                </div>
                           
                 <div className="flex justify-between bg-white p-1 rounded-xl border-black gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300 border">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">8:00 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Angelique Kidjo</h5>
                              <p className="text-xs text-gray-500">Afrobeat</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4 gap-2">
                        <div className="flex max-w-[140px] gap-1 rounded-md bg-black text-white px-1 py-0 inline-block text-xs text-white mr-1">Headliner</div>
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-black text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Main Stage</span>
                        </div>           
                    </div>
               
                </div>
                
            </div>
                
            <div data-state="active" data-day="saturday" 
             data-state={activeDay === "saturday" ? "active" : "inactive"} class="data-[state=inactive]:hidden data-[state=active]:flex flex-col gap-4">
                
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">11:30 AM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Indian Classical Ensemble</h5>
                              <p className="text-xs text-gray-500">Classical</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-blue-800 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Cultural Stage</span>
                        </div>           
                    </div>
                </div>
                
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">1:00 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Tash Sultana</h5>
                              <p className="text-xs text-gray-500">Psychedelic Soul</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-green-600 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">World Stage</span>
                        </div>           
                    </div>
                </div>
                
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">2:30 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Toumani Diabaté</h5>
                              <p className="text-xs text-gray-500">Kora</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-blue-800 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Cultural Stage</span>
                        </div>           
                    </div>
                </div>
              
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">4:00 PM</span>
                            
                        </div>
                        <div class="flex flex-col">
                               <h5 class=" text-start text-xs text-gray-900 font-bold">Nitin Sawhney</h5>
                              <p class="text-xs text-gray-500">Electronic World</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-black text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Main Stage</span>
                        </div>           
                    </div>
                </div>
           
                 <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">5:45 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Rodrigo y Gabriela</h5>
                              <p className="text-xs text-gray-500">Acoustic Rock</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-blue-800 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span class="text-xs text-white mr-1">Cultural Stage</span>
                        </div>           
                    </div>
                                   
                </div>
                  
                 <div className="flex justify-between bg-white p-1 rounded-xl border-black gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300 border">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">7:30 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Anoushka Shankar</h5>
                              <p className="text-xs text-gray-500">Indian Classical</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4 gap-2">
                        <div className="flex max-w-[140px] gap-1 rounded-md bg-black text-white px-1 py-0 inline-block text-xs text-white mr-1">Headliner</div>
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-black text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Main Stage</span>
                        </div>           
                    </div>
                </div>
            </div>            
           
            <div data-state="inactive" data-day="sunday" 
             data-state={activeDay === "sunday" ? "active" : "inactive"} class="data-[state=inactive]:hidden data-[state=active]:flex flex-col gap-4">
                
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">11:10 AM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Indian Classical Ensemble</h5>
                              <p className="text-xs text-gray-500">Classical</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-blue-800 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Cultural Stage</span>
                        </div>           
                    </div>
                </div>
               
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">1:00 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Tash Sultana</h5>
                              <p className="text-xs text-gray-500">Psychedelic Soul</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-green-600 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">World Stage</span>
                        </div>           
                    </div>
                </div>
              
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">2:30 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Toumani Diabaté</h5>
                              <p className="text-xs text-gray-500">Kora</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-blue-800 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Cultural Stage</span>
                        </div>           
                    </div>
                </div>
               
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">5:00 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Nitin Sawhney</h5>
                              <p className="text-xs text-gray-500">Electronic World</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-black text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Main Stage</span>
                        </div>           
                    </div>
                </div>
                                
                 <div className="flex justify-between bg-white p-1 rounded-xl border-black gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300 border">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">6:00 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Bomba Estéreo</h5>
                              <p className="text-xs text-gray-500">Cumbia Electrónica</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4 gap-2">
                        <div className="flex max-w-[140px] gap-1 rounded-md bg-black text-white px-1 py-0 inline-block text-xs text-white mr-1">Headliner</div>
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-black text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Main Stage</span>
                        </div>           
                    </div>
                    
                </div>
              
                <div className="flex justify-between bg-white p-1 rounded-xl gap-4 hover:shadow-md active:shadow-sm
  hover:scale-105 active:scale-95 transition-transform duration-300">
                    <div className="w-2/3  flex items-center gap-4 px-2 py-4">
                        <div className="flex justify-center items-center gap-1">
                            <img src="/img/clock-grey.svg" alt="clock" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-gray-500">7:30 PM</span>
                            
                        </div>
                        <div className="flex flex-col">
                               <h5 className=" text-start text-xs text-gray-900 font-bold">Toumani Diabaté</h5>
                              <p className="text-xs text-gray-500">Kora</p>
                        </div>                 
                    </div>
                    <div className="w-1/3 flex px-4 items-center justify-end py-4">
                        <div className="flex max-w-[120px] gap-1 rounded-md bg-blue-800 text-white px-0 py-0 inline-block">
                            <img src="/img/location-white.svg" alt="Location" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                            <span className="text-xs text-white mr-1">Cultural Stage</span>
                        </div>           
                    </div>
                </div>
                </div>
            </div>
        </div>
   
    <div className="flex justify-center items-center gap-4">
            
        <div>
            <div className="flex justify-center items-center max-w-[140px] gap-1">
                <span className="bg-black w-4 h-4 rounded"></span>
                <span className="text-xs text-gray-900 mr-1">Main Stage</span>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center max-w-[140px] gap-1">
                <span className="bg-green-500 w-4 h-4 rounded"></span>
                <span className="text-xs text-gray-900 mr-1">World Stage</span>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center max-w-[140px] gap-1">
                <span className="bg-blue-800 w-4 h-4 rounded"></span>
                <span className="text-xs text-gray-900 mr-1">Cultural Stage</span>
            </div>
        </div>

    </div>
</section>

  );
}