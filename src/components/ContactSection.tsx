import { Mail, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-primary text-2xl md:text-3xl lg:text-4xl mb-8 animate-fade-up">
            Samenwerken met Heleen of meer weten over Adappt?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <a
              href="mailto:contact@heleenhendriksen.nl"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact opnemen
            </a>
            <a
              href="https://www.adappt.health/nl/informatie"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Meer over Adappt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
