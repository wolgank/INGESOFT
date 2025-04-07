import React from "react";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
function App() {
  return (
    <>
      <div>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {/* Navbar */}
          <nav className="bg-primary px-6 py-4 shadow-md flex items-center justify-between">
            <div className="text-2xl font-bold">Mi App</div>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Acerca
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
            <ModeToggle />
          </nav>
          <section
            className="relative h-[600px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('./public/images/club-deportivo-y-social.jpg')",
            }}
          >
            <h2 className="text-center text-3xl font-semibold text-primary">
              Deportes por conocer
            </h2>
            <p className="text-center text-gray-500 mt-2">
              Participa de nuestros deportes
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
              {[
                { name: "Tenis", icon: "🎾", image: "/tenis.jpg" },
                { name: "Squash", icon: "🏸", image: "/squash.jpg" },
                { name: "Frontón", icon: "🏓", image: "/fronton.jpg" },
                { name: "Natación", icon: "🏊", image: "/natacion.jpg" },
              ].map(({ name, icon, image }) => (
                <div
                  key={name}
                  className="relative rounded-xl overflow-hidden shadow-lg group"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition duration-300"></div>
                  <div className="relative z-10 text-white p-6 flex flex-col items-center justify-center h-full">
                    <span className="text-4xl">{icon}</span>
                    <h3 className="mt-2 text-xl font-bold">{name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
