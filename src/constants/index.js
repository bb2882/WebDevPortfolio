import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "UI Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Web Developer",
		icon: starbucks,
		iconBg: "#383E56",
		points: [
			"Proficient in HTML, CSS, and JavaScript, with a strong understanding of web standards and best practices.",
			"Skilled in building responsive websites that work seamlessly across different devices and screen sizes.",
			"Understanding of performance optimization techniques to ensure fast-loading and efficient websites.",
			"Knowledge of RESTful APIs and AJAX to facilitate data exchange between the client and server.",
			"Knowledge of website security practices to protect against common vulnerabilities.",
			"Ability to troubleshoot and debug web applications for optimal functionality.",
			"Continuous learning to stay up-to-date with the latest web technologies and trends."
		],
	},
	{
		title: "UI Developer",
		icon: tesla,
		iconBg: "#E6DEDD",
		points: [
			"Expertise in creating visually appealing user interfaces (UI) and user experiences (UX) for web applications.",
			"Implementation of UI designs using HTML, CSS, and JavaScript to bring designs to life.",
			"Usability testing and feedback analysis to improve the UI/UX and optimize user engagement.",
			"Adherence to accessibility standards to create inclusive and user-friendly interfaces.",
			"Keeping up with the latest design trends and best practices to deliver cutting-edge UI solutions."
		],
	},
	{
		title: "React.js Developer",
		icon: shopify,
		iconBg: "#383E56",
		points: [
			"Expertise in building web applications using React library.",
			"Knowledge of JavaScript and React concepts for developing reusable and component-based UI.",
			"Utilization of state management libraries like Redux to manage app states effectively.",
			"Integration with RESTful APIs to fetch and display data in the web app.",
			"Proficient in handling app navigation and routing for smooth user experience.",
			"Testing and debugging web applications for optimal functionality.",
			"Familiarity with performance optimization techniques to ensure efficient app performance.",
			"Understanding of responsive design principles for creating user-friendly interfaces across various devices.",
		],
	},
	{
		title: "Front-End Engineer",
		icon: meta,
		iconBg: "#E6DEDD",
		points: [
			"Expertise in front-end technologies like HTML, CSS, and JavaScript to create user-friendly interfaces.",
			"Understanding of browser rendering behavior and performance optimization techniques.",
			"Utilization of front-end frameworks and libraries like React or Next.js for building dynamic web applications.",
			"Collaboration with back-end developers to integrate front-end and back-end functionalities seamlessly.",
			"Proficiency in version control systems like Git to manage codebase efficiently.",
			"Writing clean and maintainable code following coding standards and best practices.",
		],
	},

	{
		title: "My Desired Company",
		icon: backend,
		iconBg: "#E6DEDD",
		points: [
			"A company that values and encourages creativity in web development.",
			"A supportive and collaborative work environment that fosters innovation.",
			"Opportunities for continuous learning and professional growth.",
			"Clear communication and well-defined goals for projects.",
			"A focus on building user-centric and visually appealing web applications.",
			"A commitment to following web standards and best practices.",
			"Recognition and appreciation for individual and team contributions.",
			"Emphasis on work-life balance and employee well-being.",
			"A diverse and inclusive workplace that respects and celebrates different perspectives.",
			"A company that prioritizes staying updated with the latest web technologies and industry trends.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };