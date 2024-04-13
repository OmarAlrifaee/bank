import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} md:text-start text-center`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 leading-loose`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button
          text="get started"
          bg="bg-blue-gradient"
        />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img
          src={card}
          alt="card deal"
          className="md:mt-0 mt-12"
        />
      </div>
    </section>
  );
};

export default CardDeal;
