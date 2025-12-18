import { Stethoscope, Users } from "lucide-react";

const ConclusionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card/40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-primary text-3xl md:text-4xl lg:text-5xl mb-8 animate-fade-up">
            Conclusies & Toekomstige Impact
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Er is <span className="font-semibold text-foreground">brede steun</span> onder 
            zorgverleners, patiënten en mantelzorgers voor de ontwikkeling van hulpmiddelen 
            die de informatievoorziening tijdens het diagnostische proces ondersteunen.
          </p>

          <div className="bg-card rounded-2xl p-8 border border-border/50 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="heading-primary text-2xl md:text-3xl mb-6">
              De ADappt Oplossing
            </h3>
            <p className="text-muted-foreground mb-8">
              Ons onderzoek heeft geleid tot de ontwikkeling van ADappt - een digitale tool die biedt:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* For Healthcare Providers */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-circle !mx-0 !w-12 !h-12 !mb-0">
                    <Stethoscope className="w-5 h-5 text-icon" />
                  </div>
                  <h4 className="font-heading font-semibold text-heading text-lg">
                    Voor zorgverleners:
                  </h4>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-15">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    Ondersteuning bij gezamenlijke besluitvorming
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    Overzichten van diagnostische tests
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    Communicatietools voor dementierisico
                  </li>
                </ul>
              </div>

              {/* For Patients */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-circle !mx-0 !w-12 !h-12 !mb-0">
                    <Users className="w-5 h-5 text-icon" />
                  </div>
                  <h4 className="font-heading font-semibold text-heading text-lg">
                    Voor patiënten:
                  </h4>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-15">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    Geanimeerde uitleg van afspraken
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    Voorbeeldvragenlijsten
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
