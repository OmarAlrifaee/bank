import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";
const Testimonials = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
      id="clients"
    >
      <div className=" flex justify-between items-center md:flex-row flex-col">
        <h2 className={styles.heading2}>
          What people are <br className="md:block hidden" /> saying about us
        </h2>
        <p className={styles.paragraph}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex md:flex-nowrap flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] mt-10">
        {feedback.map((card) => (
          <FeedBackCard
            key={card.id}
            {...card}
          />
        ))}
      </div>
      {/* the gradient */}
      <div className=" absolute z-0 w-[60%] h-[60%] -right-1/2 rounded-full blue__gradient" />
    </section>
  );
};

export default Testimonials;
