const findings = [
  "Informatiebehoeften variëren per ziektestadium en veranderen over tijd",
  "Meerdere informatieformaten (verbaal, schriftelijk, visueel, digitaal) helpen om aan individuele behoeften te voldoen",
  "Het bespreken van amyloïde PET-scanresultaten met mensen met subjectieve cognitieve klachten is haalbaar met adequate vervolgzorg",
  "Zorgprofessionals vertonen aanzienlijke variatie in wanneer zij communiceren over de ziekte van Alzheimer als onderliggende diagnose",
];

const FindingsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card/40">
      <div className="container mx-auto px-6">
        <h2 className="heading-primary text-3xl md:text-4xl lg:text-5xl mb-12 animate-fade-up">
          Belangrijkste Bevindingen
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          {findings.map((finding, index) => (
            <div
              key={index}
              className="finding-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-foreground leading-relaxed">{finding}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindingsSection;
