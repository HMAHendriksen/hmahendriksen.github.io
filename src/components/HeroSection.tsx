import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-up text-center lg:text-left">
            <h1 className="heading-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Informatievoorziening op de Geheugenpoli
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
              Heleens onderzoek richt zich op het verbeteren van de informatievoorziening 
              tijdens het diagnostisch traject op de geheugenpoli met speciale aandacht 
              voor subjectieve cognitieve klachten. Het onderzoek richt zich op de informatie 
              die aan patiënten en hun naasten wordt verstrekt, zodat de communicatie effectief is: 
              ze een duidelijker begrip krijgen, weloverwogen besluiten kunnen nemen en het 
              behandelingstraject uiteindelijk verbetert.
            </p>
          </div>

          {/* Illustration */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <img
              src={heroIllustration}
              alt="Dokter met patiënten in gesprek over diagnose"
              className="w-full max-w-lg mx-auto lg:max-w-none rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
