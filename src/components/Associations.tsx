import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Store, Building2, Phone, MailIcon, LinkIcon } from 'lucide-react';

const associations = [
	{
		id: 1,
		name: 'Les Banques Alimentaires',
		description:
			'Réseau d\'associations qui collectent, gèrent et partagent des denrées alimentaires pour aider les personnes en difficulté.',
		website: 'https://www.banquealimentaire.org',
		phone: '01 23 45 67 89',
		email: 'contact@banquealimentaire.org',
		address: '15 rue de la Solidarité, 75001 Paris',
		type: 'association',
		image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
	},
	{
		id: 2,
		name: 'Too Good To Go',
		description:
			'Application mobile qui permet aux commerçants de vendre leurs invendus à prix réduits aux consommateurs.',
		website: 'https://toogoodtogo.fr',
		phone: '01 23 45 67 89',
		email: 'contact@toogoodtogo.fr',
		address: "8 rue de l'Innovation, 75002 Paris",
		type: 'platform',
		image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg',
	},
	{
		id: 3,
		name: 'Phenix',
		description:
			'Entreprise sociale qui développe des solutions innovantes pour réduire le gaspillage alimentaire.',
		website: 'https://wearephenix.com',
		phone: '01 23 45 67 89',
		email: 'contact@phenix.com',
		address: '25 rue de l\'Économie Circulaire, 75003 Paris',
		type: 'enterprise',
		image: 'https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg',
	},
];

const Associations: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
			scale: 0.95,
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 30,
			},
		},
		exit: (direction: number) => ({
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
			scale: 0.95,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 30,
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
			transition: { duration: 0.3 },
		},
		notSelected: {
			width: '0.75rem',
			transition: { duration: 0.3 },
		},
	};

	const paginate = (newDirection: number) => {
		setDirection(newDirection);
		setCurrentIndex((prevIndex) => (prevIndex + newDirection + associations.length) % associations.length);
	};

	return (
		<section id="associations" className="py-16 bg-receipt-paper">
			<div className="container mx-auto px-4">
				<div className="text-center font-receipt text-receipt-text mb-12">
					<Store className="w-8 h-8 mx-auto mb-4" />
					<p>================================</p>
					<h2 className="text-3xl my-4">RÉPERTOIRE PARTENAIRES</h2>
					<p>AGIR ENSEMBLE CONTRE LE GASPILLAGE</p>
					<p>================================</p>
				</div>

				<div className="relative max-w-3xl mx-auto">
					<AnimatePresence initial={false} custom={direction} mode="wait">
						<motion.div
							key={currentIndex}
							custom={direction}
							variants={slideVariants}
							initial="enter"
							animate="center"
							exit="exit"
							className="w-full bg-receipt-paper border-2 border-dashed border-receipt-border p-8"
						>
							{/* Image de l'association */}
							<div
								className="relative h-64 bg-cover bg-center rounded-lg mb-6"
								style={{ backgroundImage: `url(${associations[currentIndex].image})` }}
							>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
							</div>

							{/* Informations de l'association */}
							<div className="space-y-6 font-receipt text-receipt-text">
								<div className="text-center">
									<p>--------------------------------</p>
									<h3 className="text-2xl my-2">{associations[currentIndex].name}</h3>
									<p>--------------------------------</p>
								</div>

								<p className="text-center">{associations[currentIndex].description}</p>

								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<Building2 className="w-4 h-4" />
										<p>{associations[currentIndex].address}</p>
									</div>
									<div className="flex items-center gap-2">
										<Phone className="w-4 h-4" />
										<p>{associations[currentIndex].phone}</p>
									</div>
									<div className="flex items-center gap-2">
										<MailIcon className="w-4 h-4" />
										<p>{associations[currentIndex].email}</p>
									</div>
								</div>

								<div className="text-center">
									<p>--------------------------------</p>
									<p className="mt-2">
										{associations[currentIndex].type === 'association'
											? 'ASSOCIATION'
											: associations[currentIndex].type === 'platform'
											? 'PLATEFORME'
											: 'ENTREPRISE SOCIALE'}
									</p>
									<br/>
									<a
										href={associations[currentIndex].website}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-receipt-text text-receipt-paper hover:bg-receipt-text/90 px-6 py-2 rounded-lg transition-colors"
									>
										{associations[currentIndex].website.replace('https://', '')}
									</a>
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
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-receipt-paper/90 backdrop-blur-sm rounded-full p-4 shadow-lg text-receipt-text border-2 border-dashed border-receipt-border hover:bg-receipt-text hover:text-receipt-paper transition-colors"
					>
						<ChevronLeft className="w-8 h-8" />
					</motion.button>

					<motion.button
						variants={buttonVariants}
						initial="rest"
						whileHover="hover"
						whileTap="tap"
						onClick={() => paginate(1)}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-receipt-paper/90 backdrop-blur-sm rounded-full p-4 shadow-lg text-receipt-text border-2 border-dashed border-receipt-border hover:bg-receipt-text hover:text-receipt-paper transition-colors"
					>
						<ChevronRight className="w-8 h-8" />
					</motion.button>
				</div>

				{/* Indicateurs de page */}
				<div className="flex justify-center mt-8 gap-2">
					{associations.map((_, index) => (
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
							aria-label={`Aller à l'association ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Associations;