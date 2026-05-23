import { useState } from "react";
import Unitbv from "./pages/unitbv";
import Utcn from "./pages/utcn";
import { Card } from "./components/ui/card";
import unitbvImg from "./assets/unitbv.jpg";
import utcnImg from "./assets/utcn.jpg";

function App() {
  const [view, setView] = useState("home");

  // Keep theme class updated on page load
  useState(() => {
    const savedTheme = localStorage.getItem("ubb-theme") || "light";
    const root = document.documentElement;
    if (savedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  });

  if (view === "unitbv") {
    return <Unitbv onBack={() => setView("home")} />;
  }

  if (view === "utcn") {
    return <Utcn onBack={() => setView("home")} />;
  }

  return (
    <div
      className="w-full min-h-screen bg-bg text-text transition-colors duration-200 flex flex-col items-center justify-center p-6 md:p-12 gap-8"
    >
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-h m-0 tracking-tight leading-tight">
          Portal Carieră
        </h1>
        <p className="text-sm md:text-base text-text mt-3">
          Alege universitatea și facultatea pentru a accesa joburile disponibile
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full items-center max-w-md mt-2">
        {/* Card UniTBV */}
        <Card
          onClick={() => setView("unitbv")}
          className="relative flex flex-col justify-between overflow-hidden cursor-pointer rounded-2xl border border-border/80 hover:border-[#007A87]/50 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all w-full h-56 p-6 group"
        >
          {/* Background Image */}
          <img
            src={unitbvImg}
            alt="Universitatea Transilvania"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 z-10" />

          {/* Card Content */}
          <div className="relative z-20 flex flex-col justify-between h-full text-white">
            <div className="flex justify-between items-start">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#007A87] to-[#005f69] flex items-center justify-center text-white font-black text-xs shadow-md border border-white/10 shrink-0">
                UniTBV
              </div>
            </div>
            <div className="text-left min-w-0">
              <h3 className="text-lg font-extrabold text-white m-0 leading-snug drop-shadow-md">
                Universitatea Transilvania din Brașov
              </h3>
              <p className="text-xs md:text-sm text-white/85 mt-1.5 leading-relaxed font-semibold drop-shadow-xs">
                Facultatea de Matematică și Informatică
              </p>
            </div>
          </div>
        </Card>

        {/* Card UTCN */}
        <Card
          onClick={() => setView("utcn")}
          className="relative flex flex-col justify-between overflow-hidden cursor-pointer rounded-2xl border border-border/80 hover:border-[#4261e4]/50 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all w-full h-56 p-6 group"
        >
          {/* Background Image */}
          <img
            src={utcnImg}
            alt="Universitatea Tehnica Cluj-Napoca"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 z-10" />

          {/* Card Content */}
          <div className="relative z-20 flex flex-col justify-between h-full text-white">
            <div className="flex justify-between items-start">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#4261e4] to-indigo-700 flex items-center justify-center text-white font-black text-xs shadow-md border border-white/10 shrink-0">
                UTCN
              </div>
            </div>
            <div className="text-left min-w-0">
              <h3 className="text-lg font-extrabold text-white m-0 leading-snug drop-shadow-md">
                Universitatea Tehnică din Cluj-Napoca
              </h3>
              <p className="text-xs md:text-sm text-white/85 mt-1.5 leading-relaxed font-semibold drop-shadow-xs">
                Facultatea de Automatică și Calculatoare
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
