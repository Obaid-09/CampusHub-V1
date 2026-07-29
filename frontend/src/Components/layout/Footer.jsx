import Logo from "../common/Logo";
import FooterLinks from "./FooterLinks";

import {
  quickLinks,
  resourceLinks,
  socialLinks,
} from "../../constants/footerLinks";

const Footer = () => {
  return (
    <footer
      className="
                bg-secondary
                text-white
                mt-20
            "
    >
      <div
        className="
                    max-w-7xl
                    mx-auto
                    pl-10
                    pr-8
                    py-16
                    grid
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-12
                    center
                "
      >
        {/* Logo */}

        <div>
          <Logo />

          <p
            className="
                            mt-6
                            text-gray300
                            leading-7
                        "
          >
            CampusHub is a centralized academic platform where students can
            upload, discover and share study resources efficiently.
          </p>
        </div>
        <FooterLinks title="Quick Links" links={quickLinks} />

        <FooterLinks title="Resources" links={resourceLinks} />

        <FooterLinks title="Connect" links={socialLinks} />
      </div>

      <div className="border-t border-gray700">
        <div
          className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-6
                    text-center
                "
        >
          <p className="text-gray400">© 2026 CampusHub. All Rights Reserved.</p>

          <p className="mt-2 text-gray400">
            Designed & Developed with
            <span className="text-red-500 mx-2">❤️</span>
            by
            <span className="text-primary font-semibold ml-2">Obaidullah</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
