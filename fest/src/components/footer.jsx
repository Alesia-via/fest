export default function Footer() {
  return (
    <footer className="bg-black text-primary-foreground">
    <div className=" mx-auto px-4 py-2">
         
        <div className="grid lg:grid-cols-4 gap-8 mb-8 border-b border-gray-700 pb-4">
 
        <div>
            <div className="flex items-center mb-8 gap-2">
                <img src="/img/music-notes-white.svg" alt="logo" className="w-6 h-6 object-cover rounded-lg inline-block mr-1"/>
                <h2 className="text-lg font-bold text-white mb-4">CultureFest</h2>
            </div>
            <p className="text-gray-200 text-sm mb-8">Celebrating the world's musical heritage through three days of unforgettable performances and cultural exchange.</p>
            <div className="flex mt-4 gap-4">
                <a href="#" className="text-gray-200 hover:text-white transition-colors" target="_blank">
                    <img src="/img/facebook.svg" alt="Facebook" className="w-6 h-6 object-cover rounded-lg inline-block"/>
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors" target="_blank">
                    <img src="/img/twitter.svg" alt="Twitter" className="w-6 h-6 object-cover rounded-lg inline-block"/>
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors" target="_blank">
                    <img src="/img/instagram.svg" alt="Instagram" className="w-6 h-6 object-cover rounded-lg inline-block"/>
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors" target="_blank">
                    <img src="/img/youtube.svg" alt="Youtube" className="w-6 h-6 object-cover rounded-lg inline-block"/>
                </a>
            </div>

        </div> 
 
  <div>
    <h3 className=" text-white font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-2">
        <li><a href="#about" className="text-white  hover:text-primary-foreground transition-colors">About</a></li>
        <li><a href="#lineup" className="text-white  hover:text-primary-foreground transition-colors">Lineup</a></li>
        <li><a href="#schedule" className="text-white  hover:text-primary-foreground transition-colors">Schedule</a></li>
        <li><a href="#tickets" className="text-white  hover:text-primary-foreground transition-colors">Tickets</a></li>
        <li><a href="#venue" className="text-white  hover:text-primary-foreground transition-colors">Venue</a></li>
    </ul>
    </div>
   
     <div>
        <h3 className="text-white font-semibold mb-4">Support</h3>
        <ul className="space-y-2">
            <li><a href="#" className="text-white  hover:text-primary-foreground transition-colors">FAQ</a></li>
            <li><a href="#" className="text-white  hover:text-primary-foreground transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-white  hover:text-primary-foreground transition-colors">Accessibility</a></li>
            <li><a href="#" className="text-white  hover:text-primary-foreground transition-colors">Safety</a></li>
            <li><a href="#" className="text-white  hover:text-primary-foreground transition-colors">Volunteers</a></li>
        </ul>
    </div>
    
     <div>
        <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
        <p className="text-gray-200 mb-4">Get the latest updates on artists, tickets, and festival news.</p>
        <div className="space-y-3">
            <input type="email" data-slot="input" className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gray-900 border-gray-600 placeholder:text-gray-500" placeholder="Enter your email"/>
            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full bg-white text-gray-900 hover:bg-gray-200">Subscribe</button>
        </div>
    </div>
</div>
 
<div className="flex justify-between items-center p-2 mb-8  border-b border-gray-700 pb-4">
    <a className="flex justify-center items-center" href="mailto:info@culturefest.com" target="_blank">
        <span className="w-4 h-4 object-cover rounded-lg inline-block mr-1"><img src="/img/email-white.svg" alt="Email"/></span>
                    <span className="text-xs text-white hover:text-gray-400  transition-colors">info@culturefest.com</span>
                </a>
            <a className="flex justify-center items-center" href="tel:+351912345678" target="_blank">
                    <span className="w-4 h-4 object-cover rounded-lg inline-block mr-1"><img src="/img/phone-white.svg" alt="Telefone"/></span>
                    <span className="text-xs text-white hover:text-gray-400  transition-colors">+351 912 345 678</span>
                </a>
            <a className="flex justify-center items-center" href="https://maps.app.goo.gl/SThg8tobiVZrQzme6" target="_blank">
                    <span className="w-4 h-4 object-cover rounded-lg inline-block mr-1"><img src="/img/location-white.svg" alt="location"/></span>
                    <span className="text-xs text-white hover:text-gray-400  transition-colors">Central Park, New York</span>
                </a>
            </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-white">© 2025 CultureFest. All rights reserved.</div>
            <div className="flex space-x-6 text-sm"><a href="#" className="text-xs text-white hover:text-gray-400 transition-colors">Privacy Policy</a><a href="#" className="text-xs text-white hover:text-gray-400 transition-colors">Terms of Service</a><a href="#" className="text-xs text-white hover:text-gray-400 transition-colors">Cookie Policy</a>
            </div>
        </div>

    </div>
</footer>
  );
}