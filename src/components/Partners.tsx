
const Partners = () => {
  const partners = ["Coinbase", "Figma", "Layerpath", "Dropbox", "EasyTax"];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">Trusted by 2,500+ startups worldwide</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="text-xl font-semibold text-muted-foreground/60">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
