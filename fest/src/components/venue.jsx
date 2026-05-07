export default function Venue() {
  return (
    <section id="venue" className="bg-gray-100 min-h-screen py-20 px-4">
    <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col max-w-[600px] mx-auto">
            <h2 className="text-4xl text-center font-bold mb-8">Venue Information</h2>
            <p className="text-center text-gray-500 mb-8">CultureFest takes place in the heart of Manhattan at Central Park's Great Lawn, providing a beautiful natural setting for our global celebration.</p>
        </div>
             
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mb-8">
             
            <div data-slot="left-card" className="flex flex-col p-6 gap-4">
                 
             <div data-slot="left-card-component" className="flex flex-col p-6 gap-4 bg-white rounded-xl border hover:shadow-md ">
                <div className="flex items-start space-x-4 mb-4">
                    <img src="/img/location-check.svg" alt="location" className="w-6 h-6 object-cover rounded-lg inline-block mr-1"/>
                    <div>
                        <h5 className="text-sm font-bold text-gray-900">Central Park - Great Lawn</h5>
                        <p className="text-xs text-gray-500">Central Park West & 85th Street<br/> New York, NY 10024</p>
                    </div>
                </div>
             <div data-slot="card-2-component" className="flex flex-col p-6 gap-4">
                <div>
                    <h5 className="text-sm font-bold text-gray-900">Festival Hours</h5>
                    <p className="text-xs text-gray-500">Friday - Sunday: 11:00 AM - 10:00 PM<br/>Gates open at 10:30 AM daily</p>
                </div>
                <div>
                    <h5 className="text-sm font-bold text-gray-900">Venue Capacity</h5>
                    <p className="text-xs text-gray-500">15,000 daily capacity across multiple stage areas</p>
                </div>
             </div>
            <a data-slot="button" className="bg-gray-900 text-white text-center py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300 w-full mt-6" href="https://maps.app.goo.gl/suG7zgUpfN9rdoRU6" target="_blank">Get Directions</a>    
             </div>
           
             <div data-slot="card-component" className="flex flex-col p-1 gap-4">
               
                 <h4 className="text-lg font-bold text-gray-900">Getting There</h4>
                
             <div data-slot="card-2-component" className="flex flex-col p-1 gap-4"> 
                <div className="flex items-start mb-4 gap-2">
                    <div className="p-1 bg-gray-300 rounded-md">
                        <img src="/img/subway.svg" alt="subway" className="w-6 h-6 object-cover rounded-lg inline-block mr-2"/>
                    </div>
                    <div> 
                        <h5 className="text-sm font-bold text-gray-900">Subway</h5>
                        <p className="text-xs text-gray-500">Take the 6 train to 68th St-Hunter College or 77th St stations</p>
                    </div>
                </div> 
                <div className="flex items-start mb-4 gap-2">
                    <div className="p-1 bg-gray-300 rounded-md">
                        <img src="/img/bus.svg" alt="bus" className="w-6 h-6 object-cover rounded-lg inline-block mr-1"/>
                    </div>
                    <div>
                        <h5 className="text-sm font-bold text-gray-900">Bus</h5>
                        <p className="text-xs text-gray-500">Multiple bus lines serve the area including M1, M2, M3, and M4</p>
                    </div>
                </div>
                <div className="flex items-start mb-4 gap-2">
                    <div className="p-1 bg-gray-300 rounded-md">
                        <img src="/img/car.svg" alt="car" className="w-6 h-6 object-cover rounded-lg inline-block mr-1"/>
                    </div>
                    <div>
                        <h5 className="text-sm font-bold text-gray-900">Car</h5>
                        <p className="text-xs text-gray-500">Parking available at nearby garages. Festival shuttles provided.</p>
                    </div>
                </div>
             </div>
            </div> 
        </div>
       
           <div data-slot="right-card" className="flex flex-col p-6 gap-4">
                <div data-slot="img" className="full mb-8">
                    <img src="/img/photo-vue-section.jpeg" alt="venue" className="w-full h-[300px] object-cover rounded-lg"/>
                </div>
                <div data-slot="content" className="flex flex-col gap-8 mb-8">
                    <h4 className="text-lg font-bold text-gray-900">Venue Amenities</h4>
                    <div className="grid grid-cols-2 gap-4">
                        
                        <div className="flex items-start mb-4 gap-2">
                        <div className="p-1 bg-gray-300 rounded-md">
                         <img src="/img/spoon-fork.svg" alt="food" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                    </div>
                    <div>
                        <h5 className="text-xs font-bold text-gray-900">Food & Drinks</h5>
                        <p className="text-[10px] text-gray-500">International food vendors and cultural cuisine</p>
                    </div>
                </div>

                  <div className="flex items-start mb-4 gap-2">
                        <div className="p-1 bg-gray-300 rounded-md">
                         <img src="/img/full-shoping-cart.svg" alt="shoping" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                    </div>
                    <div>
                        <h5 className="text-xs font-bold text-gray-900">Merchandise</h5>
                        <p className="text-[10px] text-gray-500">Official festival gear and artist merchandise</p>
                    </div>
                </div>

                  <div className="flex items-start mb-4 gap-2">
                        <div className="p-1 bg-gray-300 rounded-md">
                         <img src="/img/photo.svg" alt="camera" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                    </div>
                    <div>
                        <h5 className="text-xs font-bold text-gray-900">Photo Ops</h5>
                        <p className="text-[10px] text-gray-500">Designated photo areas with cultural backdrops</p>
                    </div>
                </div>
                
                  <div className="flex items-start mb-4 gap-2">
                        <div className="p-1 bg-gray-300 rounded-md">
                         <img src="/img/car.svg" alt="parking" className="w-4 h-4 object-cover rounded-lg inline-block mr-1"/>
                    </div>
                    <div>
                        <h5 className="text-xs font-bold text-gray-900">Parking</h5>
                        <p className="text-[10px] text-gray-500">Multiple parking areas with shuttle service</p>
                    </div>
                </div>
                 
                    </div>
                    <div className="flex flex-col gap-6 bg-gray-200 rounded-xl border mt-8">
                        <div data-slot="card-content" className=" p-6">
                            <h4 className="font-semibold mb-2">Important Venue Notes</h4>
                            <ul className="text-xs text-muted-foreground space-y-1">
                                <li>• Blankets and low-back chairs welcome</li>
                                <li>• No outside food or beverages</li>
                                <li>• Bag checks at all entrances</li>
                                <li>• Weather contingency plans in place</li>
                            </ul>
                        </div>
                    </div>
                    
                </div> 
        </div>
    </div>
    </div>
 </section> 
  );
}