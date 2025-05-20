import React, { useEffect, useRef, useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Depuis que j'ai changé mes habitudes grâce aux conseils du site, je réduis mon gaspillage alimentaire de 70% et je fais des économies considérables.",
    author: "Marie Dupont",
    role: "Mère de famille",
    imageSrc: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    quote: "En tant que restaurateur, j'ai mis en place plusieurs mesures anti-gaspillage. Nos déchets ont diminué de 40% et notre clientèle apprécie notre démarche écoresponsable.",
    author: "Thomas Martin",
    role: "Chef restaurateur",
    imageSrc: "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    quote: "Notre école a mis en place un programme de sensibilisation basé sur vos ressources. Les enfants sont devenus de véritables ambassadeurs anti-gaspillage à la maison!",
    author: "Sophie Leroux",
    role: "Directrice d'école",
    imageSrc: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section 
      id="témoignages" 
      className="py-20 bg-gradient-to-b from-emerald-800 to-emerald-900 text-white"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils Témoignent</h2>
          <p className="text-lg text-emerald-100">
            Découvrez comment nos solutions ont aidé des personnes et des organisations à réduire leur impact environnemental et à changer leurs habitudes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ease-in-out absolute w-full transform ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <div className="rounded-full overflow-hidden w-24 h-24 mx-auto border-4 border-emerald-200">
                        <img 
                          src={testimonial.imageSrc} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <blockquote className="italic text-lg mb-4">"{testimonial.quote}"</blockquote>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-emerald-300">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-white scale-125' : 'bg-white/40'
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;