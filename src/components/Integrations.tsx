
const Integrations = () => {
  const integrations = [
    { name: "Webhook integration", description: "Real-time data synchronization" },
    { name: "Slack integration", description: "Team notifications and updates" },
    { name: "Google Drive integration", description: "Document management and storage" },
    { name: "Data processing", description: "Advanced analytics and reporting" },
    { name: "API integration", description: "Custom integrations and automation" },
    { name: "Payment processing", description: "Secure transaction processing" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get more value from your tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with 2000+ apps, connect your favorite third-party tools instantly and start building your productivity workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
              <h3 className="font-semibold mb-2">{integration.name}</h3>
              <p className="text-sm text-muted-foreground">{integration.description}</p>
              <button className="text-primary text-sm font-medium mt-2 hover:underline">
                View integration →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
