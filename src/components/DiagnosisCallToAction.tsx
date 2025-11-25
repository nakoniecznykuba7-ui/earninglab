import { ChevronDown } from 'lucide-react';

export const DiagnosisCallToAction = () => {
  return (
    <section className="relative bg-navy-950 py-16 px-4">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-card p-8 md:p-12 shadow-glow-cyan">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Nie wiesz co wybrać?
                </h2>
                <div className="space-y-2 text-gray-400 leading-relaxed">
                  <p>Zrób 10-min diagnozę — powiemy Ci wprost, co ma sens.</p>
                  <p>Bez wciskania na siłę. Jeśli nic nie pasuje — też Ci to powiemy.</p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 border-2 border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold">1</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-white font-semibold text-lg">Diagnoza (cel + zasoby)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 border-2 border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold">2</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-white font-semibold text-lg">Dobór programu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/10 border-2 border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold">3</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-white font-semibold text-lg">Plan na 7 dni</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-cyan-400/70 pt-2">
                Wszystko robimy 1:1 — bez generowanych, losowych planów.
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <button
                  className="px-4 py-3 rounded-xl border-2 border-cyan-400/40 text-cyan-400 font-semibold text-sm transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  aria-label="1:1 feedback"
                >
                  1:1 feedback
                </button>
                <button
                  className="px-4 py-3 rounded-xl border-2 border-cyan-400/40 text-cyan-400 font-semibold text-sm transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  aria-label="Plan krok po kroku"
                >
                  Plan krok po kroku
                </button>
              </div>

              <a
                href="/kontakt"
                className="btn-primary text-center text-lg py-4"
                aria-label="Umów konsultację"
              >
                Umów konsultację
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#porownanie-programow"
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
