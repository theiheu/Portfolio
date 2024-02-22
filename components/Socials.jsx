"use client";

import Link from "next/link";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstallFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";

const icons = [
  {
    path: "/",
    name: <RiYoutubeFill />,
  },
  {
    path: "",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/theiheu",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/thehieu236/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiInstallFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link target="_blank" href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
