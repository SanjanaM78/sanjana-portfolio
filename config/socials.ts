import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@SanjanaM78",
    icon: Icons.gitHub,
    link: "https://github.com/SanjanaM78",
  },
  {
    name: "LinkedIn",
    username: "Sanjana Mahadeva",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/sanjana-mahadeva",
  },
 
  {
    name: "Gmail",
    username: "Sanjana M",
    icon: Icons.gmail,
    link: "sanjanam843@gmail.com",
  },
];
