import { clients } from "../constants";
import styles from "../style";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-12`}>
      <div className={`${styles.flexCenter} flex-wrap gap-10`}>
        {clients.map(({ id, logo }) => (
          <div key={id}>
            <img
              src={logo}
              alt="client"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
