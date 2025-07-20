'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'CookIA',
		description: 'Un générateur de recettes via IA, réalisé avec ReactJS et HuggingFace',
		image: '/cookia.png',
		url : "https://adsoub.alwaysdata.net/cookia",
		git: "https://github.com/adsoub/cookIA",
	},
	{
		id: 2,
		title: 'Assembly : Endgame',
		description: 'Une version du jeu du pendu, réalisé avec ReactJS',
		image: '/assembly.png',
		url: "https://adsoub.alwaysdata.net/assembly",
		git:"https://github.com/adsoub/assembly",
	},
	{
		id: 3,
		title: 'MDCM',
		description: 'Un jeu web présentant les missions du Département Charente Maritime, réalisé avec KaplayJS',
		image: '/mdcm.png',
		url: "https://adsoub.alwaysdata.net/kaplay",
		git:"https://github.com/adsoub/mdcm",
	},
	{
		id: 4,
		title: 'Blog Pop Culture',
		description: 'Un blog comprenant affichage et tri des articles, inscription/connexion utilisateurs, dashboard et CRUD, réalisé avec PHP et MySQL',
		image: '/blog.png',
		url: "https://adsoub.alwaysdata.net/blog_stage",
		git:"https://github.com/adsoub/series02",
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Réalisations
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-200 mb-4">{project.description}</p>
							<div className="flex gap-4">
								<Link href={project.url} target='blank' className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
									Voir le projet
								</Link>
							{project.git && <Link href={project.git} className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
									GitHub
								</Link>}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
