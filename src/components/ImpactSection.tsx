import { Users, UserCheck, FileText, Wrench, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    title: "Patiënten & Naasten",
    highlight: "802 patiënten",
    description: "namen deel",
  },
  {
    icon: UserCheck,
    title: "Zorgprofessionals",
    highlight: "160 zorgprofessionals",
    description: "namen deel",
  },
  {
    icon: FileText,
    title: "Informatiebehoeften Patiënten",
    highlight: "1 op de 4 patiënten",
    description: "wilde meer informatie over hun diagnostische traject",
  },
  {
    icon: Wrench,
    title: "Behoeften aan hulpmiddelen voor Zorgverleners",
    highlight: "79% van de zorgprofessionals",
    description: "heeft betere hulpmiddelen nodig voor het communiceren van onzekerheden en dementierisico",
  },
  {
    icon: Heart,
    title: "Gepersonaliseerde Communicatie",
    highlight: "Sterke steun",
    description: "voor gepersonaliseerde communicatiebenaderingen binnen alle belanghebbendengroepen",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="heading-primary text-3xl md:text-4xl lg:text-5xl mb-12 animate-fade-up">
          Impact van het Onderzoek
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="stat-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-circle">
                <stat.icon className="w-6 h-6 text-icon" />
              </div>
              <h3 className="text-heading font-heading font-semibold text-lg mb-2">
                {stat.title}
              </h3>
              <p className="text-foreground">
                <span className="font-semibold text-stat-number">{stat.highlight}</span>{" "}
                <span className="text-muted-foreground">{stat.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
