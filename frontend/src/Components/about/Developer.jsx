import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Button from "../ui/Button";
import pp from "../../assets/OBAID_PIC.jpeg"
import { useNavigate } from "react-router-dom";


const Developer = () => {
  const navigate = useNavigate()

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="
                        bg-white
                        rounded-3xl
                        shadow-card
                        p-10
                        lg:p-14
                        grid
                        lg:grid-cols-3
                        gap-10
                        items-center
                    "
        >
          {/* Image */}

          <div className="flex justify-center">
            <img
              src={pp}
              alt="Developer"
              className="
                                w-56
                                h-56
                                rounded-full
                                object-cover
                                border-4
                                border-primaryLight
                            "
            />
          </div>

          {/* Details */}

          <div className="lg:col-span-2">
            <p className="text-primary font-semibold">BUILT BY</p>

            <h2
              className="
                                mt-3
                                text-5xl
                                font-heading
                                font-bold
                                text-secondary
                            "
            >
              Obaidullah
            </h2>

            <p
              className="
                                mt-6
                                text-xl
                                leading-9
                                text-gray600
                            "
            >
              Pre-final year undergraduate at
              <strong> NIT Warangal</strong> passionate about building scalable
              software solutions and AI-powered educational platforms that
              simplify learning for students.
            </p>

            <div
              className="flex gap-4 mt-8 flex-wrap">
                {/* <Button
                  variant="outline">
                  <FaGithub size={18} />
                  GitHub
                </Button> */}
                <a
                  href="https://github.com/Obaid-09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <FaGithub size={18} />
                    GitHub
                  </Button>
                </a>
              
                <a
                  href="https://www.linkedin.com/in/obaidullahhassaan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <FaLinkedin size={18} />
                    LinkedIn
                  </Button>
                </a>
              

              <Button variant="outline">
                <Mail size={18} />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
