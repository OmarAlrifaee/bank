import styles, { layout } from "../style";
import Button from "./Button";
const Cta = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col justify-between md:text-start text-center bg-black-gradient-2 box-shadow rounded-2xl`}
    >
      <div className="p-8">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div>
        <Button
          text="get started"
          bg="bg-blue-gradient"
        />
      </div>
    </section>
  );
};

export default Cta;
