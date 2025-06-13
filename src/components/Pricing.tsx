
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$10",
      period: "/mth",
      description: "Perfect for individuals",
      features: [
        "Basic card management",
        "ATM access worldwide",
        "Mobile banking app",
        "24/7 customer support",
        "Spend tracking",
      ],
      buttonText: "Get started",
    },
    {
      name: "Pro",
      price: "$20",
      period: "/mth",
      description: "Great for small businesses",
      features: [
        "Everything in Basic",
        "Business expense tracking",
        "Advanced analytics dashboard",
        "Multi-currency support",
        "Priority customer support",
        "API access",
      ],
      buttonText: "Get started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$40",
      period: "/mth",
      description: "Designed for large teams",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Advanced reporting tools",
        "Custom integrations",
        "Dedicated account manager",
        "White-label solutions",
      ],
      buttonText: "Get started",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden costs and no monthly charges. Choose the plan that works for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
