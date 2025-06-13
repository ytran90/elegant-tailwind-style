
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="text-sm font-medium mb-4 opacity-90">Smart. Helpful. Trusted.</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Simple banking that works like magic.
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Switch to UnitedCard based in the United States with free world offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold">
                Join now
              </Button>
              <Button size="lg" className="bg-purple-600 text-white border border-purple-500 hover:bg-purple-500">
                Apply now
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 transform rotate-12 animate-float card-shadow">
                <div className="text-white">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-sm opacity-75">UnitedCard</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="text-2xl font-mono mb-2">4532 1234 5678 9012</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs opacity-75">CARD HOLDER</div>
                      <div className="text-sm font-medium">ALEX SMITH</div>
                    </div>
                    <div>
                      <div className="text-xs opacity-75">EXPIRES</div>
                      <div className="text-sm font-medium">12/27</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 transform -rotate-6 absolute top-4 left-4 -z-10 animate-float card-shadow" style={{animationDelay: '1s'}}>
                <div className="text-white">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-sm opacity-75">UnitedCard</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="text-2xl font-mono mb-2">5678 9012 3456 7890</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs opacity-75">CARD HOLDER</div>
                      <div className="text-sm font-medium">SARAH JONES</div>
                    </div>
                    <div>
                      <div className="text-xs opacity-75">EXPIRES</div>
                      <div className="text-sm font-medium">09/26</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
