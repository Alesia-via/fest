export default function Home() {
  return (
<section id="home" className="pt-20 min-h-screen bg-[url('/img/festival-background.jpeg')] bg-cover bg-center bg-no-repeat">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-6xl text-white text-center font-bold mb-4">CultureFest</h1>
    <h2 className="text-4xl text-white text-center font-semibold mb-4">World Music Festival 2025</h2>
    <p className="text-lg text-center text-white  mb-8">Experience the world's most vibrant cultures through music, dance, and art.<br/> Join us for three unforgettable days celebrating global diversity.</p> 
    <div className="flex flex-col items-center mt-4 md:mt-0 md:flex-row md:items-center justify-center gap-4">
        <div>
            <img src="/img/calendar.svg" alt="Calendar icon" className="w-6 h-6 inline-block mr-2"/>
            <span className="text-white">July 15-17, 2025</span>
        </div>
            <div>
            <img src="/img/location.svg" alt="Location icon" className="w-6 h-6 inline-block mr-2"/>
            <span className="text-white">Central Park, New York</span>
        </div>
         <div>
            <img src="/img/people-white.svg" alt="People icon" className="w-6 h-6 inline-block mr-2"/>
            <span className="text-white">50+ Artists</span>     
        </div>
    </div>
    <div className=" pt-20 flex justify-center gap-4 ">
        <a href="#tickets" className="inline-block bg-gray-900 text-white font-bold px-6 py-3 rounded hover:bg-gray-700">Buy Ticket Now</a>
        <a href="#lineup" className="inline-block bg-white text-white font-bold px-6 py-3 rounded hover:text-gray-900">View Lineup</a> 
    </div>

  </div> 
</section>
    );
    }