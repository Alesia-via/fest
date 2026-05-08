import { useState, useEffect } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false);
 // Блокировка скролла
  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";   // блокируем скролл
  } else {
    document.body.style.overflow = "";         // возвращаем скролл
  }
}, [open]);

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
      <button className="hidden md:inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">Get Tickets
      </button>
      {/* BURGER BUTTON */}
          <button
            className="md:hidden flex flex-col gap-1 z-[60]"
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-0.5 bg-black transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition ${open ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>
    </div>
  </div>
  {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[40] ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* MOBILE MENU */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transition-transform duration-300 z-[50] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg">
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#lineup" onClick={() => setOpen(false)}>Lineup</a></li>
          <li><a href="#schedule" onClick={() => setOpen(false)}>Schedule</a></li>
          <li><a href="#tickets" onClick={() => setOpen(false)}>Tickets</a></li>
          <li><a href="#venue" onClick={() => setOpen(false)}>Venue</a></li>
        </ul>
      </nav>
</header>
  );
}