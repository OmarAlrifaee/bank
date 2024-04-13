import styles, { layout } from "../style";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className={`${layout.sectionReverse} justify-between items-center `}
    >
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-full h-full z-[5]"
        />

        {/* gradients */}
        <div className="absolute z-[3] -left-1/2  top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2  bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </div>
      <div className={`md:text-start text-center`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="md:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph}  max-w-[470px] mt-5 leading-loose`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex items-center gap-5 mt-8 md:justify-start justify-center">
          <img
            src={google}
            alt="google store"
            className="cursor-pointer"
          />
          <img
            src={apple}
            alt="apple store"
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
