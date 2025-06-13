
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start your 30-day free trial
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Join over 4,000+ startups already using our product.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold">
            Learn more
          </Button>
          <Button size="lg" className="bg-purple-600 text-white border border-purple-500 hover:bg-purple-500">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
