import { features } from "../constants/index";
import styles, { layout } from "../style";
import Button from "./Button";
const Business = () => {
  return (
    <section
      id="features"
      className={`${layout.section} mt-20`}
    >
      <div className={`${layout.sectionInfo} md:text-start text-center`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="md:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 leading-loose`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button
          text="get started"
          bg="bg-blue-gradient"
        />
      </div>
      <div className="md:mt-0 mt-5">
        {features.map(({ id, content, icon, title }) => (
          <div
            key={id}
            className="flex items-center md:justify-start justify-center gap-6 mt-10 p-4 rounded-xl feature-card"
          >
            <img
              src={icon}
              alt={title}
              className="p-4 rounded-full bg-dimBlue"
            />
            <div>
              <h3 className={` text-md capitalize text-white font-bold`}>
                {title}
              </h3>
              <p className={`${styles.paragraph} text-sm mt-2 max-w-screen-xs`}>
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
