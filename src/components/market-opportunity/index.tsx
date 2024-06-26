import { motion } from "framer-motion";
// import { BoxParentVariants } from "../../animation/entry002";

export default function MarketOpportunity({coloredBg=false}:{coloredBg?:boolean}) {
  return (
    <div className={`${coloredBg?"bg-rz-lightblue":""} grid lg:grid-cols-2 grid-cols-1 border-y lg:px-40 md:px-24 sm:px-16 px-4 py-8 gap-8 sm:gap-16`}>
        <motion.img
        // initial={{ scale: 0, borderRadius: 1000 }}
        // whileInView={{ scale: 1, borderRadius: 0 }}
        src="about1.jpg"
        className=" object-cover h-[13rem] w-full lg:order-first order-last"
        alt=""
      />
      <motion.div
        // variants={BoxParentVariants}
        // initial="hidden"
        // whileInView="visible"
        className="text-black flex flex-col gap-4 sm:gap-8"
      >
        <motion.h3
          // variants={BoxParentVariants}
          className="playfair-display text-2xl sm:text-3xl font-semibold"
        >
          Market Opportunity
        </motion.h3>
        <motion.h3
        //  variants={BoxParentVariants}
          className="text-black/50 text-sm sm:text-base">
          The market opportunity for Ricoz is substantial, given the increasing
          demand for centralized platforms that offer comprehensive tech
          insights and solutions. With the tech industry experiencing rapid
          growth and innovation, there is a growing need for a platform like
          Ricoz that brings together the latest trends, breakthroughs, and
          industry updates in one convenient location.
        </motion.h3>
      </motion.div>
      
    </div>
  );
}
