
import { CheckCircle, CreditCard, DollarSign } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The only card you'll ever need. Simple.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Switch instantly between your private and business life. Switch from business mode to personal mode instantly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">International cards</h3>
                <p className="text-muted-foreground">
                  Spend money anywhere in the world no matter where you are. With ATM access in over 55,000 locations worldwide.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Business to business</h3>
                <p className="text-muted-foreground">
                  With Flutterwave, you can accept payments on multiple channels - POS, mobile money, bank transfers, USSD and QR.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced analytics</h3>
                <p className="text-muted-foreground">
                  Monitor all your spending automatically from different channels. You can set spending limits and receive alerts when limits are hit.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 card-shadow">
              <img 
                src="/lovable-uploads/30d11c55-6573-4463-b623-aeb296d73c14.png" 
                alt="Credit card mockup" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
