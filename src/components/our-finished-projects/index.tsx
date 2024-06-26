import React from "react";
import FillButton from "../fill-button";
import { PROJECTS } from "./constants";
import ProjectWrapper from "./project-wrapper";
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";

export default function OurFinishedProjects() {
  const [expand, setExpand] = React.useState(false);
  return (
    <div className="text-black sm:py-28 py-8 lg:px-40 md:px-32 sm:px-24 px-4 flex flex-col items-center gap-8 sm:gap-16">
      <div className="flex flex-col items-center justify-center">
        <SectionHeading
          title="Our Finished Projects"
          subtitle="Services We Deliver & Help You Implement For Success"
        />
      </div>
      <div className="flex lg:gap-16 sm:gap-8 gap-4">
        <motion.div className="grid md:grid-cols-3 grid-cols-1 transition-all lg:gap-8 sm:gap-8 gap-4 overflow-hidden">
          {PROJECTS.map((project, i) => {
            if (expand)
              return (
                <ProjectWrapper
                  key={`${project.title}_${i}`}
                  title={project.title}
                  description={project.description}
                  img={project.img}
                  span={project.span}
                />
              );
            else {
              if (i < 5) {
                return (
                  <ProjectWrapper
                    key={`${project.title}_${i}`}
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    span={project.span}
                  />
                );
              }
            }
          })}
        </motion.div>
      </div>
      <FillButton
        onClick={() => setExpand((x) => !x)}
        title={expand ? "VIEW LESS" : "VIEW MORE"}
      />
    </div>
  );
}
