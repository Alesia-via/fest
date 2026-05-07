import { useState } from 'react'

export default function Tickets() {
const [selectedTicket, setSelectedTicket] = useState(null)
  return (
    <section id="tickets" className="bg-white min-h-screen py-20 px-4">   
<div className="flex flex-col max-w-[1200px] mx-auto mb-8">
    
    <div className="flex flex-col max-w-[600px] mx-auto mb-12">
        <h2 className="text-4xl text-center font-bold mb-8">Festival Tickets</h2>
        <p className="text-center text-gray-500 mb-12">Choose your perfect festival experience. All tickets include access to cultural workshops, food vendors, and merchandise areas.</p>
    </div>
   
     <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] mx-auto gap-4 mb-8">
       
         <div data-slot= "card" 
         className={`
              flex flex-col justify-center items-center gap-6 rounded-xl border relative 
              overflow-hidden transition-all p-2
              ${selectedTicket === "general" 
                ? "border-black shadow-xl scale-[1.03] bg-gray-100" 
                : "hover:shadow-lg"}
            `}>
            <div data-slot="card-header" className="flex flex-col justify-center  items-center mb-4">
                <div  className="flex justify-center  items-center mb-4">
                    <div className="p-3 bg-gray-300 rounded-full">
                        <img src="/img/check-mark-ticket.svg" alt="calendar" className="w-12 h-12 object-cover rounded-lg inline-block mr-1"/>
                    </div>
                </div>
                <h5 className="text-sm font-bold text-gray-900">General Admission</h5>
                <div>
                    <div className="text-3xl font-bold">$99</div>
                    <div className="text-muted-foreground">3-Day Pass</div>
                </div>
            </div>
            <div data-slot="card-content" className="flex flex-col gap-4">
                <ul className="list-disc list-inside text-sm text-gray-500">
                    <li>Access to all three stages</li>
                    <li>Food vendor access</li>
                    <li>Merchandise discounts</li>
                    <li>Festival map & program</li>
                </ul>
                <button
                  onClick={() => setSelectedTicket("general")}
               className={`
    text-xs py-2 px-1 rounded-md border mb-8 transition
    ${selectedTicket === "general"
      ? "bg-gray-900 text-white border-gray-900"
      : "hover:bg-gray-200  active:bg-gray-300 text-gray-900"}
  `}>Select General Admission</button>
            </div>
                
         </div>
       
           <div data-slot= "card" className={`
              flex flex-col justify-center items-center gap-6 rounded-xl border relative 
              overflow-hidden transition-all p-2
              ${selectedTicket === "premium" 
                ? "border-black shadow-xl scale-[1.03] bg-gray-100" 
                : "hover:shadow-lg"}
            `}>
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-bl-lg">
                Most Popular
            </div>
            <div data-slot="card-header" className="flex flex-col justify-center  items-center mb-4" >
                <div  className="flex justify-center  items-center mb-4">
                    <div className="p-3 bg-gray-300 rounded-full">
                        <img src="/img/star.svg" alt="calendar" className="w-12 h-12 object-cover rounded-lg inline-block mr-1"/>
                    </div>
                </div>
                <h5 className="text-sm font-bold text-gray-900">Premium Experience</h5>
                <div>
                    <div className="text-3xl font-bold">$199</div>
                    <div className="text-muted-foreground">3-Day Pass</div>
                </div>
            </div>
            <div data-slot="card-content" className="flex flex-col gap-4">
                <ul className="list-disc list-inside text-sm text-gray-500">
                    <li>Everything in General Admission</li>
                    <li>Priority stage viewing areas</li>
                    <li>Express entry lanes</li>
                    <li>Complimentary festival t-shirt</li>
                    <li>Access to Premium Rest Areas</li>
                </ul>
                <button 
                  onClick={() => setSelectedTicket("premium")}
  className={`
    bg-gray-900 text-xs text-white py-2 px-1 rounded-md border mb-8 transition
    ${selectedTicket === "premium"
      ? "bg-gray-900 text-white border-gray-900"
      : "hover:bg-gray-200 text-gray-900"}
  `}>Select Premium Experience</button>
            </div>
                
         </div>
        

          <div data-slot= "card"  className={`
               flex flex-col justify-center items-center gap-6 rounded-xl border relative 
              overflow-hidden transition-all p-2
              ${selectedTicket === "vip"
               ? "border-black shadow-xl scale-[1.03] bg-gray-100"
               : "hover:shadow-lg"}
            `}>
            <div data-slot="card-header" className="flex flex-col justify-center  items-center mb-4" >
                <div  className="flex justify-center  items-center mb-4">
                    <div className="p-3 bg-gray-300 rounded-full">
                        <img src="/img/crown.svg" alt="calendar" className="w-12 h-12 object-cover rounded-lg inline-block mr-1"/>
                    </div>
                </div>
                <h5 className="text-sm font-bold text-gray-900">VIP Cultural Circle</h5>
                <div>
                    <div className="text-3xl font-bold">$399</div>
                    <div className="text-muted-foreground">3-Day Pass</div>
                </div>
            </div>
            <div data-slot="card-content" className="flex flex-col gap-4">
                <ul className="list-disc list-inside text-sm text-gray-500">
                    <li>Everything in Premium Experience</li>
                    <li>Meet & greet with select artists</li>
                    <li>Backstage tours</li>
                    <li>VIP lounge with complimentary drinks</li>
                    <li>Reserved seating at Main Stage</li>
                    <li>Exclusive cultural workshops</li>
                </ul>
                <button 
                  onClick={() => setSelectedTicket("vip")}
                  className={`
                    text-xs py-2 px-1 rounded-md border mb-2 transition
                    ${selectedTicket === "vip"
                      ? "bg-gray-900 text-white border-gray-900"
                      : "hover:bg-gray-200 text-gray-900"}
                  `}
                >
                  Select VIP Cultural Circle
                </button>
            </div>
                
         </div>
         

     </div>
    
     <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto gap-4 mb-8">
        <h3 className=" text-center text-lg text-gray-900 font-bold">Single Day Passes</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      
            <div data-slot= "card" 
            className={`
             flex flex-col justify-center items-center gap-2 rounded-xl border relative 
              overflow-hidden transition-all px-6 py-4
              ${selectedTicket === "friday" ? "border-black shadow-xl scale-[1.03] bg-gray-100" : "hover:shadow-lg"}
            `}
          >
                <h6 className=" text-center text-sm text-gray-900 font-bold">Friday</h6>
                <h5 className=" text-center text-lg text-gray-900 font-bold">$45</h5>
                <button 
                  onClick={() => setSelectedTicket("friday")}
  className={`
    text-xs py-2 px-1 rounded-md border mb-8 transition
    ${selectedTicket === "friday"
      ? "bg-gray-900 text-white border-gray-900"
      : "hover:bg-gray-200 text-gray-900"}
  `}>Buy Friday Pass</button>
            </div> 
        
             <div data-slot= "card" 
             className={`
              flex flex-col justify-center items-center gap-2 rounded-xl border relative 
              overflow-hidden transition-all px-6 py-4
              ${selectedTicket === "saturday" ? "border-black shadow-xl scale-[1.03] bg-gray-100" : "hover:shadow-lg"}
            `}>
                 <h6 className=" text-center text-sm text-gray-900 font-bold">Saturday</h6>
                <h5 className=" text-center text-lg text-gray-900 font-bold">$49</h5>
                <button 
                  onClick={() => setSelectedTicket("saturday")}
                  className={`
                    text-xs py-2 px-1 rounded-md border mb-8 transition
                    ${selectedTicket === "saturday"
                      ? "bg-gray-900 text-white border-gray-900"
                      : "hover:bg-gray-200 text-gray-900"}
                  `}
                >
                  Buy Saturday Pass
                </button>
             </div> 
             
              <div data-slot= "card" 
              className={`
              flex flex-col justify-center items-center gap-2 rounded-xl border relative 
              overflow-hidden transition-all px-6 py-4
              ${selectedTicket === "sunday" ? "border-black shadow-xl scale-[1.03] bg-gray-100" : "hover:shadow-lg"}
            `}>
                <h6 className=" text-center text-sm text-gray-900 font-bold">Sunday</h6>
                <h5 className=" text-center text-lg text-gray-900 font-bold">$45</h5>
                <button   onClick={() => setSelectedTicket("sunday")}
  className={`
    text-xs py-2 px-1 rounded-md border mb-8 transition
    ${selectedTicket === "sunday"
      ? "bg-gray-900 text-white border-gray-900"
      : "hover:bg-gray-200 text-gray-900"}
  `}>Buy Sunday Pass</button>
             </div>
         </div>

     </div>
    
      <div className="flex flex-col max-w-[600px] mx-auto">
        <p className="text-center  text-xs text-gray-500 mb-4">Children under 12 get free admission with paying adult. Student discounts available with valid ID.</p>
        <div className="flex gap-4 justify-center items-center">
           
            <div className="flex justify-center items-center">
                <img src="/img/check-mark.svg " alt="info" className="w-2 h-2 object-cover rounded-lg inline-block mr-1"/>
                <span className="text-[10px] text-gray-500">Mobile tickets</span>
            </div>
            
           
             <div className="flex justify-center items-center">
                <img src="/img/check-mark.svg" alt="info" className="w-2 h-2 object-cover rounded-lg inline-block mr-1"/>
                <span className="text-[10px] text-gray-500"> Instant delivery</span>
            </div>
            
                <div className="flex justify-center items-center">
                    <img src="/img/check-mark.svg" alt="info" className="w-2 h-2 object-cover rounded-lg inline-block mr-1"/>
                    <span className="text-[10px] text-gray-500">Secure checkout</span>
                </div>
            </div>

        </div>
        {/* CONTINUE BUTTON */}
        {selectedTicket && (
          <button className="mx-auto mt-6 bg-black text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-gray-200 hover:text-gray-900 hover:scale-105 transition-colors duration-300">
            Continue to Checkout
          </button>
        )}
      </div>

</section>
  );
}