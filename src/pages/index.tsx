import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="Framework-agnostic shady components"
      description="ShadyUI documentation and showcase"
    >
      <main className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>
            Looks suspicious. Behaves responsibly.
          </p>
          <Heading as="h1">Professionally untrustworthy interfaces.</Heading>
          <p className={styles.lead}>
            ShadyUI is an emerging, framework-agnostic component standard
            inspired by fake reward generators and the wonderfully questionable
            corners of the web.
          </p>
          <div className={styles.actions}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Read the vision
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://github.com/bunchofscammers"
            >
              Follow development
            </Link>
          </div>
          <p className={styles.status}>
            Pre-alpha infrastructure. Components are coming later.
          </p>
        </div>
      </main>
    </Layout>
  );
}
