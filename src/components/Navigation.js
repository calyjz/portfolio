import { Dock, DockIcon } from "./shadcn/Dock.tsx"

import { HomeIcon, MailIcon } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./shadcn/Tooltip.tsx"
import { Separator } from "./shadcn/Separator.tsx"

const Icons = {
  email: (props) => <MailIcon {...props} />,
  linkedin: (props) => (
    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px' }} {...props} />
  ),
  github: (props) => (
    <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px' }} {...props} />
  ),
}

const DATA = {
  navbar: [
    { href: "#home", icon: HomeIcon, label: "Home" },
    { href: "#connect", icon: MailIcon, label: "Email" },
    // { href: "#", icon: PencilIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/calyjz",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/calyzheng/",
        icon: Icons.linkedin,
      },
    },
  },
}

const handleScrollToComponent = (e, divID) => {
  e.preventDefault();
  document.getElementById(divID)?.scrollIntoView({ 
    behavior: 'smooth' 
  });
};

const Navigation = () => {
  return (
    <div className="dock-container">
      <TooltipProvider>
        <Dock direction="middle" className="rounded-full shadow-xl backdrop-blur-md">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={item.href} aria-label={item.label} target="blank" className="flex items-center justify-center size-12">
                    <item.icon className="w-6 h-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full w-2px bg-[#babbbf]" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>  
                  <a href={social.url} aria-label={name} target="blank" className="flex items-center justify-center size-12">
                    <social.icon className="w-6 h-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  )
}


export default Navigation;
