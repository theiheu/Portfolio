"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maiores?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maiores?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maiores?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maiores?",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-28 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Lastest Projects</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor sit amet.</p>
          <Link href={"/projects"}>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[500px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the frst 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project}></ProjectCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
