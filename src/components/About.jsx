import AboutCard from './AboutCard';
import Experience from './experience';

function About() {
    return (
        <section className='section'>
            <AboutCard/>
            <h4 className="teal-text text-darken-4 center" >Experiencia Laboral</h4>
            <Experience />
        </section>
    );
}

export default About;