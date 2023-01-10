import {
  Navbar,
  Billing,
  Button,
  CTA,
  CardDeal,
  Clients,
  FeddbackCard,
  Footer,
  GetStarted,
  Hero,
  Stats,
  Testimonials,
} from "./components";
import Business from "./components/Business";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </header>

      <section className={`bg-primary ${styles.flexStart}`}>
        <article className={`${styles.boxWidth}`}>
          <Hero />
        </article>
      </section>

      <main className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <section className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
          <Clients /> <CTA /> <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
