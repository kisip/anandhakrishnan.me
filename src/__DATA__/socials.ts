import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import { SocialLink } from "@/types/socials";

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anandhakrishnankisip",
    icon: FiLinkedin,
    color: "#0a66c2",
  },
  {
    name: "Github",
    link: "https://github.com/kisip/",
    icon: FiGithub,
    color: "#161b22",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/anandha._.krishnan/",
    icon: FiInstagram,
    color: "#c838aa",
  },
];

export default SOCIAL_LINKS;
