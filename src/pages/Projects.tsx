import { useNavigate } from "react-router-dom";
import PageHero from "@/components/sections/common/PageHero";
import ProjectCards from "@/components/sections/projects/ProjectCards";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import { projects } from "@/data/site";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        tag="Projets"
        title="Mes réalisations"
        description="Des sites sur-mesure, pensés pour leurs objectifs."
      />

      <ProjectCards projects={projects} />

      <ContactCenter
        textAnimation="fade-blur"
        tag="Contact"
        title="Et si le prochain projet était le vôtre ?"
        description="Racontez-moi votre idée, je vous dis comment la concrétiser."
        inputPlaceholder="Votre email"
        buttonText="Démarrer mon projet"
        onSubmit={() => navigate("/contact")}
      />
    </>
  );
};

export default Projects;
