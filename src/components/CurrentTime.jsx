import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const CurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    });

    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="fixed top-6 left-8 right-8 z-50 hidden md:flex flex-row items-center justify-between font-science-gothic uppercase tracking-widest pointer-events-none"
        >
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white transition-colors duration-500 pointer-events-auto">
                <Clock size={14} className="text-amber-500" />
                <span className="text-sm font-medium tracking-wide">
                    {formatter.format(time)}
                </span>
            </div>
            
            <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 opacity-80 transition-colors duration-500 pointer-events-auto">
                <MapPin size={14} className="text-amber-600 dark:text-amber-400" />
                <span className="text-sm tracking-wider uppercase font-semibold">Jaipur, Rajasthan</span>
            </div>
        </motion.div>
    );
};

export default CurrentTime;
