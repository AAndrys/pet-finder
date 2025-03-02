import { FC } from 'react';
import { motion } from 'framer-motion';

interface TooltipProps {}

const pageVariants = {
  initial: { opacity: 0, scale: 0.8, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: 10 },
};

const Tooltip: FC<TooltipProps> = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute right-7 bottom-full mb-2 w-40 p-4 bg-gray-100 rounded-lg shadow-lg"
    >
      <p className="text-sm text-gray-800">Twoje ulubione</p>
    </motion.div>
  );
};

export default Tooltip;
