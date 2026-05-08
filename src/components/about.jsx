export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-40 px-4">
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center mx-auto px-4 gap-8">
        <div className="md:w-1/2 relative">
            <h2 className=" text-3xl md:text-4xl font-bold mb-6">Celebrating Musical<br/>Heritage</h2>
            <p className="text-lg text-muted-foreground text-gray-500 mb-8">CultureFest brings together the world's most talented musicians, dancers, and artists to celebrate the rich tapestry of global culture. For three days, Central Park transforms into a vibrant showcase of humanity's musical heritage.</p>
            <div className="grid md:grid-cols-2 gap-6">
                
                <div className="flex items-start space-x-3">
                    <div className="px-2 bg-gray-200 rounded-lg">
                        <img  src="/img/planet.svg" alt="Global Diversity" className="w-12 h-12 object-contain"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-bold text-gray-900">Global Diversity</h4>
                        <p className="text-sm text-muted-foreground text-gray-500">Artists from 25+ countries representing every continent</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <div className="px-2 bg-gray-200 rounded-lg">
                        <img  src="/img/music-notes.svg" alt="Music Notes" className="w-12 h-12 object-contain"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-bold text-gray-900">Rich Traditions</h4>
                        <p className="text-sm text-muted-foreground text-gray-500">From folk to contemporary, experience authentic cultural sounds</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <div className="px-2 bg-gray-200 rounded-lg">
                        <img  src="/img/people-black.svg" alt="Community" className="w-12 h-12 object-contain"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-bold text-gray-900">Community</h4>
                        <p className="text-sm text-muted-foreground text-gray-500">Connect with people who share your passion for world music.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3">
                    <div className="px-2 bg-gray-200 rounded-lg">
                        <img  src="/img/heart.svg" alt="Heart" className="w-12 h-12 object-contain"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-bold text-gray-900">Cultural Exchange</h4>
                        <p className="text-sm text-muted-foreground text-gray-500">Learn about different cultures through the universal language of music.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden">
                <img src="/img/photo-section-about.jpeg" alt="Music instruments" className="w-full h-[500px] object-cover"/>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg border z-10">
                <div className="grid grid-cols-2 gap-4 text-center">
                   <div>
                       <div className="text-2xl font-bold text-primary">50+</div>
                       <div className="text-sm text-muted-foreground">Artists</div>
                </div>

                    <div>
                        <div className="text-2xl font-bold text-primary">25+</div>
                        <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );}