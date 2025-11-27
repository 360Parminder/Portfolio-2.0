import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            company: "Devnovate",
            position: "Senior Frontend Developer",
            period: "January 2025 - Present",
            description: "Led a team of 5 developers in building responsive web applications. Implemented modern React patterns and optimized performance by 40%.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
            achievements: ["Team Leadership Excellence"]
        },
        {
            id: 2,
            company: "Microsun Global infotech LLP",
            position: "Frontend Developer",
            period: "October 2022 - December 2024",
            description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Collaborated with UX designers to implement pixel-perfect designs.",
            technologies: ["React", "JavaScript", "CSS3", "Firebase", "tailwindcss"],
            achievements: []
        },
        // {
        //   id: 3,
        //   company: "StartUp Ventures",
        //   position: "Junior Web Developer",
        //   period: "2019 - 2020",
        //   description: "Built responsive websites and web applications. Learned modern development practices and contributed to team projects.",
        //   technologies: ["HTML5", "CSS3", "JavaScript", "React"],
        //   achievements: ["Rookie of the Year", "Fast Learner Award"]
        // },
        // {
        //   id: 4,
        //   company: "Web Masters Agency",
        //   position: "Web Development Intern",
        //   period: "2018 - 2019",
        //   description: "Assisted in developing websites for various clients. Gained hands-on experience with modern web technologies and development workflows.",
        //   technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
        //   achievements: ["Outstanding Intern", "Client Satisfaction Award"]
        // }
    ];

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 overflow-hidden bg-black dark:bg-white py-4 -mx-4 md:-mx-8 mask-l-from-90% mask-r-from-90% ">
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 15,
                        }}
                    >
                        {[...Array(2)].map((_, groupIndex) => (
                            <div key={groupIndex} className="flex">
                                {[...Array(8)].map((_, i) => (
                                    <span
                                        key={i}
                                        className="text-4xl md:text-6xl font-bold text-white dark:text-black px-6 font-science-gothic uppercase"
                                    >
                                        Work Experience
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>



                {/* Timeline */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-zinc-300 dark:bg-zinc-700 h-full rounded-full"></div>

                    {/* Experience Items */}
                    {experiences.map((experience, index) => (
                        <TimelineItem
                            key={experience.id}
                            experience={experience}
                            isLeft={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const TimelineItem = ({ experience, isLeft }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: isLeft ? -50 : 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`flex items-center mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
        >
            {/* Content Card */}
            <div className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-zinc-100/50 dark:bg-zinc-800/50 rounded-2xl shadow-lg p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300"
                >
                    {/* Position & Period */}
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{experience.position}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 font-semibold">{experience.period}</p>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">{experience.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    {
                        experience.achievements.length > 0 && (
                            <div>
                                <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Achievements:</h4>
                                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1">
                                    {experience.achievements.map((achievement, index) => (
                                        <li key={index} className="text-sm">{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </motion.div>
            </div>

            {/* Company & Timeline Dot */}
            <div className="relative w-1/2 flex items-center justify-center">
                {/* Connecting Line */}
                <div className={`absolute top-1/2 w-1/2 h-0.5 bg-zinc-400 dark:bg-zinc-600 ${isLeft ? 'right-0' : 'left-0'}`}></div>

                {/* Timeline Dot */}
                <div className="relative z-10 w-4 h-4 bg-zinc-500 dark:bg-zinc-400 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg"></div>

                {/* Company Name */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${isLeft ? 'left-8' : 'right-8'}`}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 px-4 py-2 rounded-lg shadow-lg"
                    >
                        <h4 className="font-bold text-sm whitespace-nowrap">{experience.company}</h4>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default WorkExperience;