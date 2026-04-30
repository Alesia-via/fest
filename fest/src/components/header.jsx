export default function Header() {
  return (
    <header className="w-full bg-gray-100 shadow z-50">
  <div className="max-w-[1200px] mx-auto px-4">
    
    <div className="flex justify-between items-center py-4">
      
      <a href="#about" className="flex items-center gap-2 text-xl font-bold hover:text-gray-700">
        <img src="/img/music-notes.svg" alt="Music notes" className="w-6 h-6"/>
        <span>CultureFest</span>
      </a>

      <nav className="hidden md:flex gap-6">
        <a href="#about" className="hover:text-gray-700 active:text-orange-800">About</a>
        <a href="#lineup" className="hover:text-gray-700 active:text-orange-800">Lineup</a>
        <a href="#schedule" className="hover:text-gray-700 active:text-orange-800">Schedule</a>
        <a href="#tickets" className="hover:text-gray-700 active:text-orange-800">Tickets</a>
        <a href="#venue" className="hover:text-gray-700 active:text-orange-800">Venue</a>
      </nav>
      <button className="hidden md:inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">Get Tickets</button>
    </div>
  </div>
</header>
  );
}