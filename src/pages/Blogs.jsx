import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "The Future of Web Development",
            excerpt: "Exploring the latest trends in frontend frameworks, AI integration, and the shift towards server-side rendering.",
            author: "Parminder Singh",
            date: "Nov 24, 2025",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
            tags: ["Web Dev", "AI", "Future"],
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Mastering React Hooks",
            excerpt: "A deep dive into useEffect, useMemo, and useCallback. When to use them and how to avoid common pitfalls.",
            author: "Parminder Singh",
            date: "Nov 20, 2025",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
            tags: ["React", "Hooks", "JavaScript"],
            readTime: "8 min read"
        },
        {
            id: 3,
            title: "UI/UX Design Principles for Developers",
            excerpt: "Understanding color theory, typography, and spacing to create visually appealing and user-friendly interfaces.",
            author: "Parminder Singh",
            date: "Nov 15, 2025",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
            tags: ["Design", "UI/UX", "CSS"],
            readTime: "6 min read"
        },
        {
            id: 4,
            title: "Optimizing Website Performance",
            excerpt: "Techniques for faster load times, better SEO, and improved user experience using modern tools.",
            author: "Parminder Singh",
            date: "Nov 10, 2025",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            tags: ["Performance", "SEO", "Optimization"],
            readTime: "7 min read"
        }
    ];

    return (
        <div className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-16 overflow-hidden bg-black dark:bg-white py-4 -mx-4 md:-mx-8 mask-l-from-90% mask-r-from-90% ">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 10,
                    }}
                >
                    {[...Array(2)].map((_, groupIndex) => (
                        <div key={groupIndex} className="flex">
                            {[...Array(8)].map((_, i) => (
                                <span
                                    key={i}
                                    className="text-4xl md:text-6xl font-bold text-white dark:text-black px-6 font-science-gothic uppercase"
                                >
                                    Our Blog
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex flex-col gap-8">
                {blogs.map((blog, index) => (
                    <motion.article
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-neutral-500/10 flex flex-col md:flex-row h-full md:h-64"
                    >
                        {/* Content Section (Left) */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between order-2 md:order-1">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-semibold px-3 py-1 bg-white/10 text-white border border-white/20">
                                        {blog.tags[0]}
                                    </span>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {blog.readTime}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold mb-3 group-hover:text-white/80 transition-colors">
                                    {blog.title}
                                </h2>
                                
                                <p className="text-muted-foreground mb-4 line-clamp-2 text-sm md:text-base">
                                    {blog.excerpt}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1.5">
                                        <User className="w-4 h-4" />
                                        {blog.author}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        {blog.date}
                                    </span>
                                </div>
                                
                                <button className="hidden md:flex items-center gap-1 text-sm font-medium text-white hover:text-white/70 transition-colors">
                                    Read <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Image Section (Right) */}
                        <div className="w-full md:w-2/5 h-48 md:h-full overflow-hidden order-1 md:order-2">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
