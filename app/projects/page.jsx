"use client";

import ProjectCard from "@/components/ProjectCard";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "react Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maiores?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "next Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maiores?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "nest js",
    name: "nest Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maiores?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "bun js",
    name: "bun Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maiores?",
    link: "/",
    github: "/",
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
