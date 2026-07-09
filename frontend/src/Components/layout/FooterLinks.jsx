import { Link } from "react-router-dom";

const FooterLinks = ({ title, links }) => {
    return (
        <div>

            <h3 className="font-heading text-lg font-semibold text-white mb-5">
                {title}
            </h3>

            <div className="flex flex-col gap-3">

                {links.map((link) => (

                    <Link
                        key={link.name}
                        to={link.path}
                        className="
                            text-gray300
                            hover:text-primary
                            transition-all
                            duration-300
                        "
                    >
                        {link.name}
                    </Link>

                ))}

            </div>

        </div>
    );
};

export default FooterLinks;