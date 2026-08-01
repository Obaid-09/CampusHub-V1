import AboutHero from "../../Components/about/AboutHero";
import Mission from "../../Components/about/Mission";
import Features from "../../Components/about/Features";
// import Stats from "../../Components/about/Stats";
import Vision from "../../Components/about/Vision";
import Developer from "../../Components/about/Developer";
import FAQ from "../../Components/about/FAQ";
import CTA from "../../Components/about/CTA";
import WhyCampusHub from "../../Components/about/WhyCampusHub";

const About = () => {

    return (
        <section className="bg-background">
            <AboutHero />
            <WhyCampusHub/>
            <Mission />
            <Features />
            {/* <Stats /> */}
            <Vision />
            <Developer />
            <FAQ />
            <CTA />
        </section>
    );
};

export default About;
