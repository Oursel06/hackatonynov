import React, { useEffect, useRef, useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your API
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };
  
  return (
    <section className="py-20 bg-amber-50">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 max-w-4xl opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div 
              className="bg-cover bg-center h-64 md:h-auto"
              style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/5097921/pexels-photo-5097921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" 
              }}
            ></div>
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Mail className="text-emerald-600 mr-3" size={32} />
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Restez informé</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Recevez nos derniers conseils, actualités et ressources pour lutter contre le gaspillage alimentaire.
              </p>
              
              {isSubmitted ? (
                <div className="bg-emerald-100 text-emerald-800 p-4 rounded-lg flex items-center">
                  <Check className="mr-2" size={20} />
                  <span>Merci pour votre inscription!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Votre adresse email" 
                      className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      S'abonner
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Nous respectons votre vie privée. Vous pouvez vous désabonner à tout moment.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;