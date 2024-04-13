import { quotes } from "../assets";
import styles from "../style";
const FeedBackCard = ({ id, name, content, title, img }) => {
  return (
    <div className="py-10 px-8 feedback-card flex flex-col md:items-start items-center w-full rounded-lg">
      <img
        src={quotes}
        alt="quotes image"
        className=""
        width={40}
        height={40}
      />
      <p
        className={` text-base text-white capitalize font-poppins font-semibold mt-8 min-h-[100px] leading-loose`}
      >
        {content}
      </p>
      <div className="flex gap-5 items-center mt-5">
        <img
          src={img}
          alt={name}
          width={40}
          height={40}
        />
        <div>
          <h3 className=" capitalize font-poppins font-medium text-white">
            {name}
          </h3>
          <p className="text-dimWhite capitalize font-poppins font-normal">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
