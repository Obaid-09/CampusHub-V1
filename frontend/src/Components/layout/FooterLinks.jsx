import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialIcons = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin className="text-[#0A66C2]" />,
  Instagram: <FaInstagram className="text-pink-500" />,
};

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-heading text-lg font-semibold text-white mb-5">
        <span>

        </span>
        {title}
      </h3>
      {/* <h3 className="flex items-center gap-3 font-heading text-lg font-semibold text-white mb-5">
        {icons[title]}
        <span>{title}</span>
      </h3> */}

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          // <Link
          //   key={link.name}
          //   to={link.path}
          //   className="
          //                   text-gray300
          //                   hover:text-primary
          //                   transition-all
          //                   duration-300
          //               "
          // >
          //   {link.name}
          // </Link>

          <Link
            key={link.name}
            to={link.path}
            className="flex items-center gap-3 text-gray300 hover:text-primary transition-all duration-300"
          >
            {socialIcons[link.name]}
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
