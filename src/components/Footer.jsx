import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";
const Footer = () => {
  return (
    <section className={`${styles.paddingY}  md:text-start text-center mt-8`}>
      <div className="flex md:flex-row flex-col md:items-start items-center justify-between">
        <div>
          <img
            src={logo}
            alt="logo image"
            className="md:mx-0 mx-auto"
          />
          <p className={`${styles.paragraph} mt-5 max-w-[470px] leading-loose`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map(({ title, links }) => (
          <div
            key={title}
            className="md:mt-0 mt-8"
          >
            <h3 className="text-white capitalize font-semibold font-poppins mb-5">
              {title}
            </h3>
            <ul className="flex flex-col gap-3 justify-center">
              {links.map(({ link, name }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="text-dimWhite capitalize font-poppins font-normal"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <hr className="border-[#3F3E45]" />
        <div className="flex md:flex-row flex-col justify-between items-center mt-8 px-4">
          <p className="flex items-center gap-5 font-poppins text-dimWhite md:text-base text-sm capitalize">
            <span>Copyright @</span>
            <span>2021 HooBank. All Rights Reserved.</span>
          </p>
          <ul className="flex items-center gap-4 md:mt-0 mt-5">
            {socialMedia.map(({ id, icon, link }) => (
              <li key={id}>
                <a href={link}>
                  <img
                    src={icon}
                    alt={icon}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
