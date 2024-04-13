import styles from "./style";
import {
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  Cta,
  FeedBackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components/ExportComponents";
import GoUp from "./components/GoUp";
function App() {
  return (
    <div className="overflow-hidden bg-primary w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={` bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
          <Clients /> <Cta /> <Footer /> <GoUp />
        </div>
      </div>
    </div>
  );
}
export default App;
