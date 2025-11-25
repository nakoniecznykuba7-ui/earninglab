import { ArrowRight, Sparkles, ShoppingCart, Zap, ChevronDown } from 'lucide-react';

interface ProgramCardProps {
  icon: React.ReactNode;
  iconBg: string;
  badge: string;
  name: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  accentColor: string;
}

const ProgramCard = ({
  icon,
  iconBg,
  badge,
  name,
  description,
  bullets,
  ctaText,
  ctaHref,
  accentColor,
}: ProgramCardProps) => {
  return (
    <div className="glass-card glass-card-hover p-6 relative group">
      <div className="absolute top-4 right-4">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${accentColor} bg-white/5 border border-white/10`}>
          {badge}
        </span>
      </div>

      <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

      <ul className="space-y-2 mb-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start">
            <div className={`w-1.5 h-1.5 rounded-full ${accentColor} mt-2 mr-3 flex-shrink-0`} />
            <span className="text-gray-300 text-sm leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 ${accentColor} border-opacity-50 hover:border-opacity-100 font-semibold transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-950`}
        aria-label={`Przejdź do ${name}`}
      >
        {ctaText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

const StatCard = ({ label }: { label: string }) => {
  return (
    <div className="glass-card p-4 text-center">
      <p className="text-sm font-semibold text-cyan-400">{label}</p>
    </div>
  );
};

export const ProgramsHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-navy-950 overflow-hidden pt-24 pb-16 px-4">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm font-medium text-gray-300">Programy EarningLab</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Wybierz program, z którym dowieziesz{' '}
            <span className="text-gradient-cyan">pierwsze wyniki</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
            Masz do wyboru 3 ścieżki: sklep / umiejętność + AI / usługi. Dostajesz plan, zadania i feedback 1:1 — aż pojawią się realne efekty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          <div className="lg:col-span-7 space-y-6">
            <ProgramCard
              icon={<ShoppingCart className="w-7 h-7 text-cyan-400" />}
              iconBg="bg-cyan-gradient"
              badge="Najczęstszy wybór"
              name="EcomLab"
              description="Dla osób, które chcą wystartować lub odbić sklep (fizyczne albo cyfrowe produkty)."
              bullets={[
                'Produkt + oferta w 48h',
                'Ruch → pierwsze zamówienia',
                'Prosty system dowozu',
              ]}
              ctaText="Przejdź do EcomLab"
              ctaHref="#ecomlab"
              accentColor="text-cyan-400"
            />

            <ProgramCard
              icon={<Sparkles className="w-7 h-7 text-purple-400" />}
              iconBg="bg-purple-gradient"
              badge="Najbardziej przyszłościowe"
              name="AI Skill Lab"
              description="Dla osób, które chcą szybciej sprzedawać umiejętność dzięki AI (montaż, grafika, copy, automatyzacje)."
              bullets={[
                'Skill, który płaci szybko',
                'Portfolio + oferta',
                'AI workflow od razu',
              ]}
              ctaText="Przejdź do AI Skill Lab"
              ctaHref="#aiskilllab"
              accentColor="text-purple-400"
            />

            <ProgramCard
              icon={<Zap className="w-7 h-7 text-blue-400" />}
              iconBg="bg-cyan-gradient"
              badge="Największa dźwignia"
              name="Service Growth Lab"
              description="Dla freelancerów i mikro-agencji: więcej klientów, wyższe stawki, mniej chaosu."
              bullets={[
                'Oferta, cennik, pakiety',
                'Pozyskiwanie bez spiny',
                'Proces obsługi klienta',
              ]}
              ctaText="Przejdź do Service Growth Lab"
              ctaHref="#servicegrowth"
              accentColor="text-blue-400"
            />
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-3">Nie wiesz co wybrać?</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Zrób 10-min diagnozę — powiemy Ci wprost, co ma sens.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Diagnoza (cel + zasoby)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Dobór programu</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Plan na 7 dni</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <StatCard label="1:1 feedback" />
                <StatCard label="Plan krok po kroku" />
              </div>

              <a
                href="/kontakt"
                className="btn-primary w-full text-center block"
                aria-label="Umów konsultację"
              >
                Umów konsultację
              </a>

              <p className="text-xs text-gray-500 text-center mt-4">
                Jeśli żadna ścieżka nie ma sensu — też Ci to powiemy.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="#comparison"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
            aria-label="Zobacz porównanie poniżej"
          >
            <span className="text-sm font-medium">Zobacz porównanie poniżej</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
