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
    date: "May 10, 2025",
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
    date: "May 12, 2025",
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
    date: "May 16, 2025",
    heading: "How Does ERP Help to Manage Business Processes?",
    content:
      "Running a business means handling many moving parts—sales, finance...",
    author: "Shreya Goyal",
    url: "/blogs/erp-helps-in-business",
  },
  {
    id: 4,
    image: "/blogs/blog-4.png",
    mainTech: "Business",
    date: "May 20, 2025",
    heading: "How AI Chatbot Helps business to Grow?",
    content:
      "In today’s digital world, customers want quick answers, fast service, and...",
    author: "Shreya Goyal",
    url: "/blogs/ai-chatbot-helps-to-grow-business",
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
    badge: "Web Design",
    color: "text-[#8B5ADA]",
    title: "Avidion Softwares – A Futuristic Website for AI ",
    description:
      "A visually rich, interactive website built to position Avidion Softwares as a leader in AI integration, cloud tech, and digital transformation services.",
    redirectUrl: "https://avidion-software-website.vercel.app/",
  },
  {
    id: 2,
    videoUrl: "/portfolio/portfolio-2.mp4",
    badge: "Web Design",
    color: "text-[#8B5ADA]",
    title: "Avidion Softwares - Premium Software Website with AI at the Core",
    description:
      "Avidion’s landing page blends modern aesthetics with product-led storytelling. Crafted for startups and founders, it positions Avidion as a premium partner for AI-first software development.",
    redirectUrl: "https://avidionwebsite.vercel.app/",
  },
  {
    id: 3,
    videoUrl: "/portfolio/portfolio-solar.mp4",
    badge: "Energy",
    color: "text-[#F97316]",
    title:
      "Solar Power India - A Modern Website Concept for Clean Energy Innovation",
    description:
      "A sleek, responsive website designed to showcase Sorlar’s clean energy mission. Perfect for solar brands and sustainability startups.",
    redirectUrl: "https://solar-power-hazel.vercel.app/",
  },
  // {
  //   id: 4,
  //   videoUrl: "/portfolio/portfolio-4.mp4",
  //   title: "Logistics sector",
  //   description:
  //     "A warehouse worker wearing a headset and holding a RFID embedded device, navigating through aisles filled with sports merchandise. The worker... ",
  //   // redirectUrl:"#"
  // },
  // {
  //   id: 5,
  //   videoUrl: "/portfolio/portfolio-5.mp4",
  //   title: "Healthcare Sector",
  //   description:
  //     "A radiologist reviews a CT scan on a computer screen, where AI-generated annotations highlight areas of concern, such as potential intracranial...",
  //   // redirectUrl:"#"
  // },
  // {
  //   id: 6,
  //   videoUrl: "/portfolio/portfolio-6.mp4",
  //   title: "Real Estate",
  //   description:
  //     "A real estate agent uses a computer displaying AI-generated property descriptions alongside high-resolution images of properties...",
  //   // redirectUrl:"#"
  // },
  // {
  //   id: 7,
  //   videoUrl: "/portfolio/portfolio-7.mp4",
  //   title: "E-commerce",
  //   description:
  //     "A digital interface showcasing AI-generated fashion designs based on textual descriptions. The screen displays multiple apparel images created...",
  //   // redirectUrl:"#"
  // },
];

export const caseStudies = [
  {
    id: 1,
    videoUrl: "/portfolio/portfolio-kimli.mp4",
    badge: "Fintech / Automation",
    color: "text-[#4CBB17]",
    title: "Kimbly – A Modern Web Design for Digital Identity Solutions",
    description:
      "Advanced algorithmic trading solutions tailored for modern traders and institutions. This project delivers robust tools including strategy backtesting systems, real-time market scanners, and fully automated trading bots. Designed to enhance decision-making, optimize trade execution, and provide consultancy for custom strategy implementation.",
    redirectUrl: "https://wonderful-sunflower-d6bdca.netlify.app/",
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
    title: "Technical Sales Executive",
    content:
      "Join Avidion Softwares – a growing IT company seeking dynamic individuals to drive our software and AI solution sales. This is a growth-stage opportunity to work on impactful projects with B2B clients.",
    department: "IT & Software Development",
    workType: ["On-site", "Full-time"],
    requirements: [
      "0-3 years of hands-on experience in technical sales executive",
      "Engage with inbound/outbound leads and conduct discovery calls",
      "Understand client needs and propose custom software/AI solutions",
      "Draft detailed proposals, sales decks, and RFP responses",
      "Negotiate pricing and close high-value B2B deals",
      "Excellent communication, negotiation & proposal writing skills",
      "Use AI tools, CRM systems, and analytics to automate and track sales efforts",
    ],
    benefits: [
      "Work on AI-driven, innovative products",
      "Projects across diverse industries",
      "Health insurance",
      "Competitive salary",
      "Skill development support",
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
      "We provide custom software and digital solutions across a wide range of industries, including retail, logistics, finance, healthcare, education, and SaaS. Our flexible development approach allows us to adapt to any business sector and deliver results tailored to your industry-specific needs.",
  },
  {
    question: "Can I customize a service to suit my business needs?",
    answer:
      "Yes, all our services are fully customizable. Whether you need software development, business automation, or ERP solutions, we tailor each service to your unique business goals, processes, and team workflows to ensure maximum efficiency and ROI.",
  },
  {
    question: "How do I know which service is right for me?",
    answer:
      " We offer a free business consultation to analyze your current challenges and goals. Based on your needs, we recommend the most suitable solution—whether it's mobile app development, process automation, or a custom ERP system.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "Project timelines vary depending on complexity. A website, mobile app, or chatbot may take 2–4 weeks, while larger systems like ERP, WMS, or enterprise software may take 8–16 weeks. We provide a detailed project roadmap before development begins.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      " Absolutely. We provide ongoing support, regular maintenance, and security updates to keep your digital solution stable, up-to-date, and performing at its best post-launch.",
  },
  {
    question: "How does pricing work for these services?",
    answer:
      "Our pricing is flexible and based on your project’s scope, features, and integrations. We offer fixed-cost or milestone-based pricing models after a detailed requirement analysis to ensure clarity and transparency.",
  },
  {
    question:
      "Is there a consultation or discovery phase before development starts?",
    answer:
      "Yes. Every project begins with a comprehensive discovery phase where we define the business objectives, scope, timeline, and tech stack. This ensures full alignment and reduces risks during development.",
  },
  {
    question: " Do you work with startups as well as enterprises?",
    answer:
      " Yes, we work with startups, SMEs, and large enterprises alike. Whether you're launching a new idea or scaling an existing system, we adapt our development process to your business stage, team size, and growth goals.",
  },
];

export const reviews = [
  {
    id: 1,
    desc: "Working with Avidion Softwares was a game-changer for our operations. They understood our vision, automated our workflows, and delivered a custom solution ahead of schedule. The team was responsive, proactive, and genuinely committed to our success. We couldn't have asked for a better tech partner.",
    name: "Priya Mehta",
    profile: "Operations Manager at Nexora Logistics",
    url: "/testimonial/testimonial-user-1.svg",
  },
  {
    id: 2,
    desc: "Partnering with Avidion Softwares was one of the best decisions we made. Their team took the time to deeply understand our business model and delivered an intuitive platform that improved efficiency across departments. Their dedication, speed, and attention to detail exceeded expectations. Truly a reliable and skilled tech partner.",
    name: "Rahul Verma",
    profile: "Product Head at Finvia Capital",
    url: "/testimonial/testimonial-user-2.svg",
  },
  {
    id: 3,
    desc: "Avidion Softwares delivered more than just code—they brought clarity, innovation, and genuine collaboration to the table. They streamlined our internal processes, reducing turnaround times significantly. The communication was seamless, and the results spoke for themselves. Highly recommend them for any digital transformation journey.",
    name: "Karan Malhotra",
    profile: "Digital Strategy Lead at UrbanNest Retail",
    url: "/testimonial/testimonial-user-3.svg",
  },
];
