import AboutHero from "../../components/about/AboutHero";
import Mission from "../../components/about/Mission";
import Features from "../../components/about/Features";
import Stats from "../../components/about/Stats";
import Vision from "../../components/about/Vision";
import Developer from "../../components/about/Developer";
import FAQ from "../../components/about/FAQ";
import CTA from "../../components/about/CTA";
import WhyCampusHub from "../../Components/about/WhyCampusHub";

const About = () => {

    return (
        <section className="bg-background">
            <AboutHero />
            <WhyCampusHub/>
            <Mission />
            <Features />
            <Stats />
            <Vision />
            <Developer />
            <FAQ />
            <CTA />
        </section>
    );
};

export default About;
