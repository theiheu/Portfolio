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
    image: "/work/bookstoreimage.png",
    category: "React JS",
    name: "Book Store Website",
    description:
      "Book Store is a website for a company that provides online courses. It is built with React JS, Ant Design, Redux",
    link: "https://book-store-lth-reactjs.vercel.app/",
    youtube: "https://youtu.be/qxj2WATWL5M?si=8ShCQbbLo0FneydN",
    github: "https://github.com/theiheu/Web-E-Commerce-ReactJS",
  },
  {
    image: "/work/react-simple-movie.jpeg",
    category: "React JS",
    name: "React Simple Movie",
    description:
      "React Simple Movie is a website for a company that provides online courses. It is built with React JS.",
    link: "https://react-js-project-e-du-an-react-simple-movie.vercel.app/",
    github:
      "https://github.com/theiheu/ReactJS-Project-E_Du-an-React_Simple-Movie",
  },
  {
    image: "/work/portfolio-alpha.jpeg",
    category: "Bootstrap",
    name: "CyberPortfolio",
    description:
      "Portfolio website is a website for a company that provides services for the elderly. It is built with Boostrap.",
    link: "https://portfolio-alpha-eight-44.vercel.app/",
    github: "https://gitlab.com/thehieu236/portfolio",
  },
  {
    image: "/work/samar.jpeg",
    category: "HTML/CSS",
    name: "Samar Website",
    description:
      "Samar is a website for a company that provides services for the elderly. It is built with HTML, CSS, and JavaScript.",
    link: "https://web-meipaly.vercel.app/",
    github: "https://gitlab.com/thehieu236/bc_05-le_the_hieu-meipaly/",
  },
  {
    image: "/work/Web-Education-Studious.jpeg",
    category: "HTML/CSS",
    name: "Web Education Studious",
    description:
      "Web Education Studious is a website for a company that provides online courses. It is built with HTML, CSS, and JavaScript.",
    link: "https://web-education-studious.vercel.app/",
    github: "https://gitlab.com/thehieu236/bc05-capstone-nhom06",
  },

  {
    image: "/work/bank-modern-app.jpeg",
    category: "Tailwind CSS",
    name: "Bank Modern App",
    description:
      "Bank Modern App is a website for a company that provides online courses. It is built with Tailwind CSS.",
    link: "https://react-js-project-bank-modern-app.vercel.app/",
    github:
      "https://vercel.com/thehieu236/react-js-project-e-du-an-react-simple-movie/",
  },
  {
    image: "/work/employee-manager-drab.jpeg",
    category: "JavaScript",
    name: "Employee Manager Website",
    description:
      "Employee Manager is a website for a company that provides online courses. It is built with JavaScript, Boostrap.",
    link: "https://employee-manager-drab.vercel.app/",
    github: "https://gitlab.com/thehieu236/bc05_homework_js",
  },
  {
    image: "/work/trai-ga-minh-tan-phat.jpeg",
    category: "React JS",
    name: "Minh Tan Phat Farm Website",
    description:
      "Minh Tan Phat Farm is a website for a company that provides online courses. It is built with React JS",
    link: "https://trai-ga-minh-tan-phat.vercel.app/",
    github: "https://github.com/theiheu/trai-ga-Minh-Tan-Phat/",
  },
  {
    image: "/work/virtualglasses.jpeg",
    category: "JavaScript",
    name: "Virtual Glasses",
    description:
      "Virtual Glasses is a website for a company that provides online courses. It is built with HTML, CSS, and JavaScript.",
    link: "https://virtualglasses.vercel.app/",
    github: "https://gitlab.com/thehieu236/es-buoi-2/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-28 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Lastest Projects</h2>
          <p className="subtitle mb-8">Projects I have participated in...</p>
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
