import Home from "../containers/Home";
import Skill from "../containers/Skill";
import Project from "../containers/Project";
import Contact from "../containers/Contact";
const publicRoutes = [
    
    {path : "/", element: Home, name: "Home" },  
    {path : "/skill", element: Skill, name: "Skill"},  
    {path : "/project", element: Project, name: "Project"},  
    {path : "/contact", element: Contact, name: "Contact"}, 
];

export default publicRoutes;