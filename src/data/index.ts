import { IoSearch } from "react-icons/io5";
import { BiPaint } from "react-icons/bi";
import { LuCodeXml } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GoFileCode } from "react-icons/go";
import { MdAppRegistration } from "react-icons/md";

export const navItems = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Services",
    url: "/services",
  },
  {
    id: 3,
    name: "About Us",
    url: "/about-us",
  },
  {
    id: 4,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 5,
    name: "Blogs",
    url: "/blogs",
  },
  {
    id: 6,
    name: "Career",
    url: "/careers",
  },
];

export const blogs = [
  {
    id: 1,
    image: "/blogs/blog-1.png",
    mainTech: "Chatbots",
    date: "May 24, 2025",
    heading: "How Chatbots Are Improving Patient Engagement in Clinics",
    content:
      "In today’s fast-paced, tech-driven world, healthcare providers are under...",
    author: "Shreya Goyal",
    url: "/blogs/ai-chatbot-in-healthcare",
  },
  {
    id: 2,
    image: "/blogs/blog-2.png",
    mainTech: "CRM",
    date: "April 26, 2025",
    heading: "What Changes Does CRM Bring to a Business?",
    content:
      "In today’s competitive world, building strong customer relationships is key...",
    author: "Shreya Goyal",
    url: "/blogs/boost-business-crm-system",
  },
  {
    id: 3,
    image: "/blogs/blog-3.png",
    mainTech: "ERP",
    date: "April 28, 2025",
    heading: "How Does ERP Help to Manage Business Processes?",
    content:
      "Running a business means handling many moving parts—sales, finance...",
    author: "Shreya Goyal",
    url: "/blogs/erp-helps-in-business",
  },
  {
    id: 4,
    image: "/blogs/blog-1.png",
    mainTech: "Chatbots",
    date: "May 24, 2025",
    heading: "How Chatbots Are Improving Patient Engagement in Clinics",
    content:
      "In today’s fast-paced, tech-driven world, healthcare providers are under...",
    author: "Shreya Goyal",
    url: "/blogs/ai-chatbot-in-healthcare",
  },
];

export const whatWeOfferCards = [
  {
    id: 1,
    title: "AI Integration & Chatbots",
    content: "Stay connected with users through smart, 24/7 conversations.",
    icon: "/what-we-offer/icon-1.svg",
    link: "/services/ai-integration",
  },
  {
    id: 2,
    title: "AI Automation",
    content: "Automate daily tasks so your team can focus on what matters.",
    icon: "/what-we-offer/icon-2.svg",
    link: "/services/ai-automation",
  },
  {
    id: 3,
    title: "3D and Animated Website",
    content: "Bring your brand to life with rich 3D and motion effects.",
    icon: "/what-we-offer/icon-3.svg",
    link: "/services/3d-websites",
  },
  {
    id: 4,
    title: "Mobile App Development",
    content: "Build smooth, user-friendly apps your audience will love.",
    icon: "/what-we-offer/icon-4.svg",
    link: "/services/mobile-app-development",
  },
  {
    id: 5,
    title: "Custom Software Development",
    content: "Get software tailored to your exact business needs.",
    icon: "/what-we-offer/icon-5.svg",
    link: "/services/custom-software-development",
  },
  {
    id: 6,
    title: "WMS",
    content: "Make inventory smarter with real-time tracking and control.",
    icon: "/what-we-offer/icon-6.svg",
    link: "/services/wms",
  },
  {
    id: 7,
    title: "ERP",
    content: "Run your business better with everything in one system.",
    icon: "/what-we-offer/icon-7.svg",
    link: "/services/erp",
  },
  {
    id: 8,
    title: "CRM",
    content: "Track leads, grow relationships, and drive loyalty.",
    icon: "/what-we-offer/icon-8.svg",
    link: "/services/crm",
  },
  {
    id: 9,
    title: "Website Development",
    content: "Craft beautiful, high-performing websites that get results.",
    icon: "/what-we-offer/icon-9.svg",
    link: "/services/website-development",
  },
];

export const portfolio = [
  {
    id: 1,
    videoUrl: "/portfolio/portfolio-1.mp4",
    title: "Avidion Softwares – Futuristic AI & Cloud Transformation Website",
    description:
      "Avidion Software's official website is a visually captivating, interactive platform designed to position the company as a leader in AI integration, cloud solutions...",
    // redirectUrl:"#"
  },
  {
    id: 2,
    videoUrl: "/portfolio/portfolio-2.mp4",
    title:
      "Avidion: Crafting Future-Ready Digital Experiences with AI at the Core",
    description:
      "Avidion is a premium software development company dedicated to transforming ideas into reality for startups and enterprises worldwide. With a futur...",
    // redirectUrl:"#"
  },
  {
    id: 3,
    videoUrl: "/portfolio/portfolio-3.mp4",
    title:
      "ElevateCare – Suggesting an uplift in healthcare standards and patient experience.",
    description:
      "This website was developed for HealthCare Center, a forward-thinking medical facility dedicated to providing advanced healthcare for a better...",
    // redirectUrl:"#"
  },
  {
    id: 4,
    videoUrl: "/portfolio/portfolio-4.mp4",
    title: "Logistics sector",
    description:
      "A warehouse worker wearing a headset and holding a RFID embedded device, navigating through aisles filled with sports merchandise. The worker... ",
    // redirectUrl:"#"
  },
  {
    id: 5,
    videoUrl: "/portfolio/portfolio-5.mp4",
    title: "Healthcare Sector",
    description:
      "A radiologist reviews a CT scan on a computer screen, where AI-generated annotations highlight areas of concern, such as potential intracranial...",
    // redirectUrl:"#"
  },
  {
    id: 6,
    videoUrl: "/portfolio/portfolio-6.mp4",
    title: "Real Estate",
    description:
      "A real estate agent uses a computer displaying AI-generated property descriptions alongside high-resolution images of properties...",
    // redirectUrl:"#"
  },
  {
    id: 7,
    videoUrl: "/portfolio/portfolio-7.mp4",
    title: "E-commerce",
    description:
      "A digital interface showcasing AI-generated fashion designs based on textual descriptions. The screen displays multiple apparel images created...",
    // redirectUrl:"#"
  },
];

export const howWeWork = [
  {
    title: "Discovery",
    description:
      "We begin by understanding your business needs, goals, and the specific challenges you want to address.",
    icon: IoSearch,
  },
  {
    title: "Planning",
    description:
      "Our team creates a detailed roadmap outlining the scope, timeline, resources, and deliverables for your project.",
    icon: MdAppRegistration,
  },
  {
    title: "Design",
    description:
      "We create user-centric designs that align with your brand identity and provide optimal user experience.",
    icon: BiPaint,
  },
  {
    title: "Development",
    description:
      "Our developers build your solution using cutting-edge technologies and best development practices.",
    icon: LuCodeXml,
  },
  {
    title: "Testing",
    description:
      "Rigorous quality assurance ensures your solution works flawlessly across all devices and scenarios.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description:
      "We handle the smooth launch of your solution, ensuring everything runs perfectly in the production environment.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Support & Growth",
    description:
      "Our relationship continues with ongoing maintenance, updates, and strategic growth initiatives.",
    icon: FaChartLine,
  },
];

export const tapeSection = [
  {
    url: "./infinite-scroll/gemini.svg",
  },
  {
    url: "./infinite-scroll/instamojo.svg",
  },
  {
    url: "./infinite-scroll/openai.svg",
  },
  {
    url: "./infinite-scroll/paypal.svg",
  },
  {
    url: "./infinite-scroll/payu.svg",
  },
  {
    url: "./infinite-scroll/razorpay.svg",
  },
  {
    url: "./infinite-scroll/stripe.svg",
  },
  {
    url: "./infinite-scroll/lyro.svg",
  },
];

export const whyChooseUs = [
  {
    id: 1,
    icon: "/why-choose-us/rocket.png",
    title: "Innovation-Led Development – ",
    content: "We blend creativity and code for futuristic solutions.",
  },
  {
    id: 2,
    icon: "/why-choose-us/lock.png",
    title: "Security by Design – ",
    content:
      "Your data and systems stay protected with enterprise-grade security.",
  },
  {
    id: 3,
    icon: "/why-choose-us/cross.png",
    title: "Modular Architecture – ",
    content: "Scale effortlessly with plug-and-play custom solutions.",
  },
  {
    id: 4,
    icon: "/why-choose-us/hand.png",
    title: "Agile & Transparent – ",
    content:
      "Stay in the loop with iterative development and real-time collaboration.",
  },
  {
    id: 5,
    icon: "/why-choose-us/bulb.png",
    title: "Human + AI Intelligence – ",
    content: "Combine strategy and automation for smarter decision-making.",
  },
  {
    id: 6,
    icon: "/why-choose-us/brain.png",
    title: "Deep Domain Expertise-",
    content:
      "Empowering Business Transformation with AI, Cloud, and Enterprise Solutions",
  },
];

export const currentOpenings = [
  {
    title: "3D Designer",
    content:
      "We're seeking a talented UI/UX designer with strong 3D design expertise to craft immersive and visually compelling user experiences for next-gen web and mobile applications.",
    department: "Design",
    workType: ["On-site", "Full-time"],
    requirements: [
      "2+ years of professional experience in UI/UX design",
      "Proficiency in 3D design tools like Blender, Figma, or Adobe XD",
      "Strong understanding of user-centered design principles",
      "Ability to create wireframes, mockups, and interactive prototypes",
      "Experience designing for both web and mobile platforms",
      "Understanding of animation, transitions, and micro-interactions in 3D environments",
    ],
    benefits: [
      "Creative freedom on cutting-edge projects",
      "Opportunity to work with AI-driven & 3D experiences",
      "Collaborative and innovation-driven environment",
      "Health insurance",
      "Competitive salary",
    ],
  },

  {
    title: "Mobile & Custom Software Developer",
    content:
      "We're looking for a passionate developer experienced in building high-performance mobile apps and custom software solutions using modern frameworks like React Native and Flutter.",
    department: "Technology",
    workType: ["On-site", "Full-time"],
    requirements: [
      "2+ years of hands-on experience in mobile app development",
      "Proficiency in React Native and/or Flutter",
      "Experience in building and deploying apps for both Android and iOS",
      "Familiarity with RESTful APIs, Firebase, or GraphQL",
      "Knowledge of app performance optimization and debugging",
      "Experience developing custom software solutions for clients",
    ],
    benefits: [
      "Opportunity to work on AI-driven and innovative products",
      "Exposure to diverse client projects and domains",
      "Health insurance",
      "Competitive salary",
      "Skill development and certification support",
    ],
  },
];

export const websiteDevProcess = [
  {
    title: "Requirement Analysis",
    description: "Identify business goals, content needs, and target audience.",
    icon: IoSearch,
  },
  {
    title: "Planning",
    description: "Sitemap design, feature planning, and content wireframes.",
    icon: MdAppRegistration,
  },
  {
    title: "Design",
    description:
      "UI/UX prototypes, theme selection, and visual identity design.",
    icon: BiPaint,
  },
  {
    title: "Development",
    description:
      "Build responsive frontend, integrate backend (if required), and connect CMS for content management.",
    icon: LuCodeXml,
  },
  {
    title: "Testing",
    description:
      "Cross-browser testing, SEO validation, mobile responsiveness.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description:
      "Deploy to a secure, high-performance hosting platform with CDN, asset optimization, and SEO best practices.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Maintenance",
    description: "Regular updates, performance tuning, content edits.",
    icon: FaChartLine,
  },
];

export const aiAutomationProcess = [
  {
    title: "Process Mapping",
    description:
      "Identify repetitive, rule-based, and time-consuming workflows across departments.",
    icon: IoSearch,
  },
  {
    title: "Tool Selection & Planning",
    description:
      "Choose the right AI tools (e.g., NLP, ML models, RPA) and define goals for automation with clear ROI targets.",
    icon: MdAppRegistration,
  },
  {
    title: "Workflow Design",
    description:
      " Design intelligent automation flows with logic gates, triggers, exception handling, and human-in-the-loop checkpoints.",
    icon: BiPaint,
  },
  {
    title: "Implementation & Integration",
    description:
      "Deploy automation scripts, connect APIs, and integrate with existing platforms (CRM, ERP, ticketing systems, etc).",
    icon: LuCodeXml,
  },
  {
    title: "Testing & Optimization",
    description:
      "Simulate workflows, monitor performance, optimize decision accuracy, and handle edge cases.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description:
      "Go live with monitoring dashboards, load balancing, and fallback mechanisms.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Continuous Improvement",
    description:
      "Continuously monitor task efficiency, retrain models, and scale automation to new business units.",
    icon: FaChartLine,
  },
];

export const aiIntegrationProcess = [
  {
    title: "Requirement Analysis",
    description: "Define process challenges, data availability, and AI goals.",
    icon: IoSearch,
  },
  {
    title: "Planning",
    description:
      "Model selection, data preprocessing plans, integration roadmap.",
    icon: MdAppRegistration,
  },
  {
    title: "Design",
    description: "AI UX for predictions, dashboards, and control panels.",
    icon: BiPaint,
  },
  {
    title: "Development",
    description:
      "Model training, algorithm development, API setup, and frontend integration.",
    icon: LuCodeXml,
  },
  {
    title: "Testing",
    description: "Model accuracy, precision/recall,integration/unit tests.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description: "Model deployment (cloud/on-prem), monitor via MLOps tools.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Maintenanace",
    description:
      "Retraining models, performancetuning, retriggering pipelines.",
    icon: FaChartLine,
  },
];

export const appDevelopmentProcess = [
  {
    title: "Requirement Analysis",
    description:
      "Platform selection (iOS/Android), features, and target users.",
    icon: IoSearch,
  },
  {
    title: "Planning",
    description:
      "Define tech stack (Flutter, React Native, Swift), backend needs.",
    icon: MdAppRegistration,
  },
  {
    title: "Design",
    description: " UI/UX mockups with mobile responsiveness and gestures.",
    icon: BiPaint,
  },
  {
    title: "Development",
    description:
      "Frontend build, backend APIs, local storage, push notifications.",
    icon: LuCodeXml,
  },
  {
    title: "Testing",
    description: "Unit, device, performance, and crash testing.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description: "Publish on App Store & Google Play with ASO.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Maintenanace",
    description: "Monitor usage, push updates, fix OS compatibility issues.",
    icon: FaChartLine,
  },
];

export const crmProcess = [
  {
    title: "Requirement Analysis",
    description:
      "Understand business needs, user roles, data flows, and current tools.",
    icon: IoSearch,
  },
  {
    title: "Planning",
    description:
      "Choose CRM platform (e.g., Salesforce, HubSpot), define modules, set integration points.",
    icon: MdAppRegistration,
  },
  {
    title: "Design",
    description:
      "Design user-friendly workflows, custom dashboards, and automation flows.",
    icon: BiPaint,
  },
  {
    title: "Development",
    description:
      "Configure CRM, develop custom fields/modules, automate tasks, integrate third-party tools.",
    icon: LuCodeXml,
  },
  {
    title: "Testing",
    description:
      "Verify data accuracy, workflow logic, role-based access, and integration stability.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description:
      "Go live with training, user onboarding, and data migration from existing systems.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Maintenanace",
    description:
      "Ongoing support, feature updates, performance monitoring, and user feedback optimization.",
    icon: FaChartLine,
  },
];

export const erpProcess = [
  {
    title: "Requirement Analysis",
    description: "Gather and document business needs and system requirements.",
    icon: IoSearch,
  },
  {
    title: "Planning",
    description:
      "Define project scope, resources, timelines, and risk management strategies.",
    icon: MdAppRegistration,
  },
  {
    title: "Software Design",
    description:
      "Develop architectural and detailed design specifications for the ERP system.",
    icon: BiPaint,
  },
  {
    title: "Development",
    description:
      "Build and configure the ERP software according to design specifications.",
    icon: LuCodeXml,
  },
  {
    title: "Testing",
    description:
      "Conduct thorough testing to ensure the system meets requirements and is free of defects.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description:
      "Roll out the ERP system to users, often in stages, and provide training and support",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Maintenanace",
    description:
      "Ongoing support, feature updates, performance monitoring, and user feedback optimization.",
    icon: FaChartLine,
  },
];

export const wmsProcess = [
  {
    title: "Requirement Analysis",
    description:
      "Identify business needs, challenges, and goals. Define project scope, KPIs, timeline, and budget.",
    icon: IoSearch,
  },
  {
    title: "Vendor Selection & Planning",
    description:
      "Choose a WMS based on features, deployment type, and industry fit. Create a roadmap with resources and timelines.",
    icon: MdAppRegistration,
  },
  {
    title: "Design & Configuration",
    description:
      "Customize the WMS to match workflows, layout, storage logic, and integration needs.",
    icon: BiPaint,
  },
  {
    title: "Development & Integration",
    description:
      "Install and configure the WMS. Connect with ERP, TMS, and automation tools for seamless operations.",
    icon: LuCodeXml,
  },
  {
    title: "Testing",
    description:
      "Run functional, integration, and user acceptance testing to ensure stability and performance.",
    icon: GoFileCode,
  },
  {
    title: "Training & Deployment",
    description:
      "Train users across teams and roll out the system. Monitor live performance and resolve initial issues.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Continuous Improvement",
    description:
      "Gather feedback, review system performance, and implement regular updates and optimizations.",
    icon: FaChartLine,
  },
];

export const ThreedwebsiteProcess = [
  {
    title: "Requirement Analysis",
    description:
      "Understand client vision, 3D objectives, target audience, devices supported.",
    icon: IoSearch,
  },
  {
    title: "Planning",
    description:
      "Define 3D scenes, page flow, interaction logic, and performance requirements. Includes spatial storytelling goals and asset sourcing (models, textures).",
    icon: MdAppRegistration,
  },
  {
    title: "Design (UX + 3D Design)",
    description:
      "Design UI/UX wireframes plus 3D scenes and assets (using Blender, Figma, etc).",
    icon: BiPaint,
  },
  {
    title: "Development",
    description:
      "Build frontend UI, integrate backend (if needed), and develop 3D scenes using Three.js/WebGL. Add animations with GSAP and connect APIs or CMS as required.",
    icon: LuCodeXml,
  },
  {
    title: "Testing",
    description:
      "Test across browsers/devices, check animation smoothness, optimize 3D load times.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description:
      "Host on CDN-enabled infrastructure (e.g., Vercel), compress assets, and implement lazy loading.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Maintenanace",
    description:
      "Update 3D content, add new features, optimize performance over time.",
    icon: FaChartLine,
  },
];

export const csdProcess = [
  {
    title: "Requirement Analysis",
    description:
      "Engage stakeholders to define goals, business needs, and detailed software requirements.",
    icon: IoSearch,
  },
  {
    title: "Feasibility Study",
    description:
      "Assess technical, operational, and financial viability of the project.",
    icon: MdAppRegistration,
  },
  {
    title: "System Design",
    description:
      "Create architecture, wireframes, and plan system integration.",
    icon: BiPaint,
  },
  {
    title: "Development",
    description: "Write and integrate code in phases using best practices.",
    icon: LuCodeXml,
  },
  {
    title: " Testing & QA",
    description:
      "Run unit, integration, and user tests to ensure quality and reliability.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description: "Launch the software, configure systems, and train users.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Operations & Maintenance",
    description:
      "Provide support, updates, bug fixes, and enhancements based on feedback.",
    icon: FaChartLine,
  },
];

export const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across various industries including retail, logistics, finance, healthcare, education, and SaaS. Our adaptable team can tailor solutions to fit any business domain.",
  },
  {
    question: "Can I customize a service to suit my business needs?",
    answer:
      "Absolutely. Every service we offer—from software to automation—is built to fit your unique goals, processes, and team workflows.",
  },
  {
    question: "How do I know which service is right for me?",
    answer:
      "We offer a free consultation to understand your business challenges and guide you toward the right solution—whether that’s automation, app development, or a full ERP.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "Timelines vary by scope. Smaller projects like a website or chatbot can take 2–4 weeks, while larger systems like ERP or WMS may take 8–16 weeks. We’ll share a clear roadmap before we begin.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes. We provide ongoing support, maintenance, and updates to ensure your system stays secure, up-to-date, and fully functional.",
  },
  {
    question: "How does pricing work for these services?",
    answer:
      "Pricing depends on project scope, features, and integrations. We offer fixed-cost and milestone-based models after assessing your requirements.",
  },
  {
    question:
      "Is there a consultation or discovery phase before development starts?",
    answer:
      " Yes, every project starts with a discovery session where we align on goals, scope, timelines, and tech stack to ensure full transparency.",
  },
  {
    question: " Do you work with startups as well as enterprises?",
    answer:
      "Definitely. Whether you're a startup with an idea or an enterprise looking to scale, we tailor our approach to match your stage and needs.",
  },
];
