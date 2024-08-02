export const navItems = [
	{ name: 'Home', link: '/' },
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Experience', link: '#experience' },
	{ name: 'Contact', link: '#contact' }
];

export const gridItems = [
	{
		id: 1,
		title:
			'I prioritize client collaboration, fostering open communication ',
		description: '',
		className:
			'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-1 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: ''
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		className:
			'lg:col-span-1 md:col-span-2 md:row-span-1 lg:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: ''
	},
	{
		id: 4,
		title:
			'Tech enthusiast with a passion for development.',
		description: '',
		className: 'lg:col-span-1 md:col-span-1 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg'
	},

	{
		id: 5,
		title:
			'Currently building online code execution platform',
		description: 'The Inside Scoop',
		className: 'lg:col-span-2 lg:r md:col-span-3 md:row-span-1',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName:
			'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg'
	},
	{
		id: 6,
		title: 'Do you want to start a project together?',
		description: '',
		className: 'lg:col-span-1 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName:
			'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: ''
	}
];

export const projects = [
	{
		id: 1,
		title: 'Coderoom - Online Coding Assesment Platform',
		des: 'A web platform that revolutionizes coding education. It allows educators to create custom coding tests and enables students to participate in timed coding challenges. With support for multiple programming languages, real-time code execution, and a responsive design.',
		img: '/proj-1.jpg',
		iconLists: [
			'/next.svg',
			'/tail.svg',
			'/nest.svg',
			'/dock.svg',
			'/postgresql.svg',
			'/ts.svg'
		],
		link: 'https://coderoom-3l5j.onrender.com'
	},
	{
		id: 2,
		title: 'GDSC IIITV-ICD Website',
		des: "A website designed to centralize and promote the GDSC's activities. It provides information on upcoming and past events, allows users to join events, and showcases profiles of GDSC members and leads. Website strengthens the community, keeping members informed and involved in club initiatives.",
		img: '/proj-2.png',
		iconLists: ['/re.svg', '/sass.svg', '/js.svg'],
		link: 'https://gdsc-iiitvicd.onrender.com'
	},
	{
		id: 3,
		title: 'Institute Data Management System',
		des: `A web application designed to simplify and enhance data management for institutions. 
    Offers an intuitive interface for essential CRUD operations making data handling more efficient and user-friendly. 
    Provides a reliable and effective solution for maintaining accurate and up-to-date information.`,
		img: '/proj-3.png',
		iconLists: [
			'/nodejs.svg',
			'/mysql.svg',
			'/js.svg',
			'/html.svg',
			'/css.svg'
		],
		link: 'https://github.com/nileshphapale142/Institute-Database-Management-System'
	},
	{
		id: 4,
		title: 'Dr.Deepika Gupta Portolio',
		des: `Transform your online presence with a bespoke portfolio website, similar to the one created for Dr. Deepika Gupta. Our team designed an engaging, interactive platform that elegantly showcases expertise and achievements. 
    Perfect for making a lasting impression and highlighting your unique strengths.`,
		img: '/proj-4.png',
		iconLists: ['/html.svg', '/css.svg', '/js.svg'],
		link: 'https://github.com/adrianhajdin/iphone'
	}
];

export const workExperience = [
	{
		id: 1,
		title: 'Digital Intern | EaseMyGrowth',
		desc: `Developed an AI chatbot using Gemini models, reducing response times by 40% and managing over 500 queries daily with 95% accuracy. 
    Implemented a computer vision model with Roboflow to enhance quality control for bottle seal tightness. 
    Built a dynamic QR code generator for a Shopify app with Remix, increasing product information accessibility by 70% and boosting customer engagement by 25%. `,
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg'
	},
	{
		id: 2,
		title: 'Frontend Engineer Intern | CanyFix',
		desc: `Created a dynamic website to showcase company information and services, providing a compelling online presence. 
    Designed and developed an intuitive admin panel allowing administrators to effortlessly update smartphone prices and manage content. 
    This solution not only enhanced the company's digital footprint but also streamlined operations, ensuring up-to-date information and efficient management of services.`,
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp2.svg'
	},
	{
		id: 3,
		title: 'Web Dev Co-Lead | GDSC IIITV-ICD',
		desc: `Led the web development team as Co-Lead for the Google Developer Student Clubs (GDSC), guiding the creation of impactful and innovative web solutions. 
    Oversaw the development and design of various projects. 
    Collaborated with fellow leads and members to drive technical initiatives, organize events, and deliver engaging experiences 
    that advanced the club's mission.`,
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp3.svg'
	}
	// {
	// 	id: 4,
	// 	title: 'Lead Frontend Developer',
	// 	desc: 'Developed and maintained user-facing features using modern frontend technologies.',
	// 	className: 'md:col-span-2',
	// 	thumbnail: '/exp4.svg'
	// }
];

export const socialMedia = [
	{
		id: 1,
		img: '/git.svg',
		link: 'https://www.github.com/nileshphapale142'
	},
	{
		id: 2,
		img: '/twit.svg',
		link: 'https://x.com/NileshPhapale4'
	},
	{
		id: 3,
		img: '/link.svg',
		link: 'https://www.linkedin.com/in/nilesh-phapale'
	}
];
