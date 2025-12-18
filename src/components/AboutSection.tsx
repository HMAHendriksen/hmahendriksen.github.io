import heleenPortrait from "@/assets/heleen-portrait.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-primary text-3xl md:text-4xl lg:text-5xl mb-8 animate-fade-up">
            Heleen Hendriksen
          </h2>
          
          <div className="bg-card rounded-2xl p-8 border border-border/50 animate-fade-up flex flex-col md:flex-row gap-8 items-center" style={{ animationDelay: "0.1s" }}>
            <p className="text-muted-foreground text-lg leading-relaxed flex-1">
              Heleen Hendriksen richt zich in haar onderzoek op communicatie tussen zorgverleners 
              en patiënten op de geheugenpoli. Op basis van haar onderzoeksresultaten ontwikkelt 
              ze materialen die zowel patiënten als zorgverleners ondersteunen in hun gesprekken. 
              Ze doet dit bij het Alzheimercentrum Amsterdam binnen het ABOARD-project.
            </p>
            <div className="flex-shrink-0">
              <img 
                src={heleenPortrait} 
                alt="Heleen Hendriksen" 
                className="w-48 h-60 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
