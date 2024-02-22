"use client";

import ProjectCard from "@/components/ProjectCard";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
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

// remove categary duplicates
const uniqueCategeries = [
  "all projects",
  ...new Set(
    projectData.map((item) => {
      return item.category;
    })
  ),
];

const page = () => {
  const [categories, setCategories] = useState(uniqueCategeries);
  const [category, setCategory] = useState("all projects");

  const fillteredProjects = projectData.filter((project) => {
    // if cotegory is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          MyProjects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  className="capitalize w-[162px] md:w-auto"
                  value={category}
                  key={index}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tab content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {fillteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default page;
