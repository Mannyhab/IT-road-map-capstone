import React from 'react';
import { motion } from 'framer-motion';

function BoxComponent({ title, onClick, isZoomed }) {
    return (
        <motion.div 
            className="box" 
            onClick={onClick}
            animate={isZoomed ? { scale: 1.2 } : { scale: 1 }}
        >
            {title}
        </motion.div>
    );
}

export default BoxComponent;
