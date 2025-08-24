"use client";

import React from "react";
import Link from "next/link";

const Home = () => {
  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="text-center py-8 px-4 border-b border-border">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Leandro Sánchez
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
          Desarrollador Web
        </h2>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="text-center py-20 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Bienvenido a mi Portafolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubre mis proyectos y experiencias en el desarrollo web. 
            Creo soluciones digitales modernas, funcionales y centradas en el usuario.
          </p>
          <Link 
            href="#portfolio" 
            onClick={scrollToPortfolio}
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Portafolio
          </Link>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Sobre Mí
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-left">
                <p className="text-muted-foreground leading-relaxed">
                  Soy un desarrollador web apasionado por crear experiencias digitales 
                  excepcionales. Me especializo en tecnologías modernas y siempre busco 
                  la excelencia en cada proyecto.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mi enfoque se centra en escribir código limpio, crear interfaces 
                  intuitivas y desarrollar soluciones que realmente importen para 
                  los usuarios y las empresas.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Especialidades</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Desarrollo Frontend Moderno</li>
                  <li>• Aplicaciones Web Responsivas</li>
                  <li>• Optimización de Rendimiento</li>
                  <li>• Experiencia de Usuario (UX)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Mis Proyectos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Placeholder Cards */}
              {[1, 2, 3].map((project) => (
                <div 
                  key={project}
                  className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      Imagen del Proyecto {project}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    Proyecto {project}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Descripción del proyecto. Aquí puedes agregar los detalles 
                    de tus proyectos reales, tecnologías utilizadas y resultados obtenidos.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                      Next.js
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estoy disponible para nuevos proyectos y colaboraciones. 
              Hablemos sobre cómo puedo ayudarte a hacer realidad tu visión digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
                Contactar
              </button>
              <button className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors duration-300">
                Descargar CV
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-border bg-muted/30">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Leandro Sánchez. Todos los derechos reservados.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Desarrollado con Next.js y Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Home;
