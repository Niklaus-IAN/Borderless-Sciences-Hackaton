import { motion } from "framer-motion";

export const MobilePulse = () => {
  return (
    <motion.div
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [0.95, 1, 0.95],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex flex-col items-center gap-4"
    >
      <motion.img
        src="/figmaAssets/desktop.png"
        alt="desktop"
        className="w-[140px] h-[82px] md:w-[180px] md:h-[92px]"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.p
        className="text-[14px] font-bold text-[#333] md:text-[20px]"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Please switch to a desktop device to view this page.
      </motion.p>
    </motion.div>
  );
};
