import WrapperAnimation from "../components/WrapperAnimation";
import ProjectsSection from "../components/projects/Projects";
import Footer from "../components/Footer";

function Projects() {
  return (
    <WrapperAnimation  className='section-body'>
          <ProjectsSection />
          <Footer />
    </WrapperAnimation>
  );
}

export default Projects;
