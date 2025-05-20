import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Leaf, Bird, BarChart } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const categories = [
    {
        id: 1,
        name: 'Humains',
        description: `# Impact Humain Dévastateur

* Gaspillage mondial :
  * **40 tonnes** de nourriture gaspillée chaque seconde
  * **1,3 milliard de tonnes** jetées annuellement
  * Pourrait nourrir **4 fois** tous les affamés dans le monde

* Conséquences tragiques :
  * **9 millions** de décès dus à la faim chaque année
  * En France seule :
    * **10 millions de tonnes** gaspillées
    * Coût estimé : **20 milliards d'euros**

> Pendant que certains jettent, d'autres meurent de faim. Le gaspillage alimentaire est l'une des plus grandes injustices de notre temps.`,
        image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
        icon: Users,
        color: 'emerald',
        learnMoreUrl: 'https://www.ademe.fr/expertises/dechets/elements-contexte/gaspillage-alimentaire',
    },
    {
        id: 2,
        name: 'Faune',
        description: `# Destruction de la Vie Sauvage

* Impact environnemental :
  * Pollution équivalente à **tous les véhicules du monde**
  * Méthane des déchets alimentaires **25 fois plus nocif** que le CO₂

* Conséquences sur la biodiversité :
  * Destruction massive des habitats naturels
  * Extinction accélérée des espèces animales
  * Perturbation des écosystèmes

> Chaque aliment gaspillé contribue à la disparition silencieuse de notre biodiversité.`,
        image: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg',
        icon: Bird,
        color: 'amber',
        learnMoreUrl: 'https://www.wwf.fr/agir-au-quotidien/reduire-le-gaspillage-alimentaire',
    },
    {
        id: 3,
        name: 'Flore',
        description: `# Catastrophe Environnementale

* Impact sur les ressources :
  * **30%** des terres agricoles exploitées inutilement
  * Gaspillage de **250 km³ d'eau** par an
    * Équivalent à 3 fois le volume du lac Léman
  * Utilisation excessive de pesticides et fertilisants

* Dégradation des écosystèmes :
  * Déforestation massive injustifiée
  * Érosion des sols
  * Perte de biodiversité végétale

> Chaque aliment jeté détruit un morceau de notre planète.`,
        image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg',
        icon: Leaf,
        color: 'emerald',
        learnMoreUrl: 'https://www.fao.org/platform-food-loss-waste/flw-data/fr/',
    },
];

const Categories: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1500 : -1500,
			opacity: 0,
			scale: 0.95,
			rotateY: direction > 0 ? 45 : -45,
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
			rotateY: 0,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 30,
				opacity: { duration: 0.5 },
				scale: { duration: 0.5 },
				rotateY: { duration: 0.8, ease: 'easeOut' },
			},
		},
		exit: (direction: number) => ({
			x: direction < 0 ? 1500 : -1500,
			opacity: 0,
			scale: 0.95,
			rotateY: direction < 0 ? 45 : -45,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 30,
				opacity: { duration: 0.5 },
				scale: { duration: 0.5 },
				rotateY: { duration: 0.8, ease: 'easeOut' },
			},
		}),
	};

	const buttonVariants = {
		rest: { scale: 1 },
		hover: { scale: 1.1 },
		tap: { scale: 0.95 },
	};

	const indicatorVariants = {
		selected: {
			width: '3rem',
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
		notSelected: {
			width: '0.75rem',
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
	};

	const paginate = (newDirection: number) => {
		setDirection(newDirection);
		setCurrentIndex((prevIndex) => (prevIndex + newDirection + categories.length) % categories.length);
	};

	const handleDragEnd = (_: any, { offset, velocity }: { offset: { x: number }, velocity: { x: number } }) => {
		const swipe = Math.abs(offset.x) * velocity.x;
		if (swipe < -5000) {
			paginate(1);
		} else if (swipe > 5000) {
			paginate(-1);
		}
	};

	return (
		<section id="impact" className="py-16 bg-receipt-paper">
			<div className="container mx-auto px-4">
				{/* En-tête de section */}
				<div className="text-center font-receipt text-receipt-text mb-12">
					<BarChart className="w-8 h-8 mx-auto mb-4" />
					<p>================================</p>
					<h2 className="text-3xl my-4">RAPPORT D'IMPACT</h2>
					<p>CONSÉQUENCES DU GASPILLAGE</p>
					<p>================================</p>
					{/* Code-barres décoratif */}
					<div className="mt-4 flex justify-center gap-1">
						{Array.from({ length: 20 }).map((_, i) => (
							<div
								key={i}
								className="w-0.5 h-8 bg-receipt-text"
								style={{
									opacity: Math.random() * 0.5 + 0.5,
									height: `${Math.random() * 16 + 24}px`
								}}
							/>
						))}
					</div>
				</div>

				<div className="relative max-w-6xl mx-auto">
					<AnimatePresence initial={false} custom={direction} mode="wait">
						<motion.div
							key={currentIndex}
							custom={direction}
							variants={slideVariants}
							initial="enter"
							animate="center"
							exit="exit"
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.7}
							onDragEnd={handleDragEnd}
							className="w-full [transform-style:preserve-3d]"
						>
							<div className="bg-receipt-paper border-2 border-dashed border-receipt-border rounded-lg overflow-hidden">
								<div 
									className="h-96 bg-cover bg-center relative"
									style={{ backgroundImage: `url(${categories[currentIndex].image})` }}
								>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
									<div className="absolute bottom-0 left-0 right-0 p-10">
										<div className="flex items-center mb-4">
											<div className="w-16 h-16 rounded-full bg-receipt-paper/30 backdrop-blur-sm flex items-center justify-center">
												{React.createElement(categories[currentIndex].icon, {
													className: "w-8 h-8 text-white"
												})}
											</div>
											<h3 className="ml-6 text-4xl font-receipt text-white">
												{categories[currentIndex].name}
											</h3>
										</div>
									</div>
								</div>

								<div className="p-10 font-receipt">
									{/* Séparateur décoratif */}
									<p className="text-receipt-text text-center mb-6">
										********************************
									</p>

									<div className="prose prose-lg max-w-none prose-receipt">
										<ReactMarkdown>{categories[currentIndex].description}</ReactMarkdown>
									</div>

									{/* Pied de section avec code-barres */}
									<div className="mt-8">
										<p className="text-receipt-text text-center mb-4">
											--------------------------------
										</p>
										<div className="flex justify-between items-center">
											<div className="flex gap-1">
												{Array.from({ length: 10 }).map((_, i) => (
													<div
														key={i}
														className="w-0.5 h-6 bg-receipt-text"
														style={{
															opacity: Math.random() * 0.5 + 0.5,
															height: `${Math.random() * 12 + 16}px`
														}}
													/>
												))}
											</div>
											<a
												href={categories[currentIndex].learnMoreUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center bg-receipt-text text-receipt-paper hover:bg-receipt-text/90 px-6 py-3 rounded-lg transition-colors group"
											>
												EN SAVOIR PLUS
												<ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Boutons de navigation */}
					<motion.button
						variants={buttonVariants}
						initial="rest"
						whileHover="hover"
						whileTap="tap"
						onClick={() => paginate(-1)}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-receipt-paper/90 backdrop-blur-sm rounded-full p-4 shadow-lg text-receipt-text border-2 border-dashed border-receipt-border hover:bg-receipt-text hover:text-receipt-paper transition-colors z-10"
					>
						<ChevronLeft className="w-8 h-8" />
					</motion.button>

					<motion.button
						variants={buttonVariants}
						initial="rest"
						whileHover="hover"
						whileTap="tap"
						onClick={() => paginate(1)}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-receipt-paper/90 backdrop-blur-sm rounded-full p-4 shadow-lg text-receipt-text border-2 border-dashed border-receipt-border hover:bg-receipt-text hover:text-receipt-paper transition-colors z-10"
					>
						<ChevronRight className="w-8 h-8" />
					</motion.button>
				</div>

				{/* Indicateurs de page */}
				<div className="flex justify-center mt-12 gap-2">
					{categories.map((_, index) => (
						<motion.button
							key={index}
							variants={indicatorVariants}
							animate={index === currentIndex ? "selected" : "notSelected"}
							onClick={() => {
								setDirection(index > currentIndex ? 1 : -1);
								setCurrentIndex(index);
							}}
							className={`h-3 rounded-full transition-all duration-300 ${
								index === currentIndex ? 'bg-receipt-text' : 'bg-receipt-text/20 hover:bg-receipt-text/40'
							}`}
							aria-label={`Aller à la section ${categories[index].name}`}
						/>
					))}
				</div>

				{/* Code-barres décoratif du bas */}
				<div className="mt-12 flex justify-center gap-1">
					{Array.from({ length: 30 }).map((_, i) => (
						<div
							key={i}
							className="w-0.5 bg-receipt-text"
							style={{
								opacity: Math.random() * 0.5 + 0.5,
								height: `${Math.random() * 20 + 20}px`
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;