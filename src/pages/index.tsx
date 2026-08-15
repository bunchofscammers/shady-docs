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
          <Heading as="h1">Professionally untrustworthy interfaces.</Heading>
          <p className={styles.lead}>
            Scammy internet culture, packaged as reusable components for every
            framework.
          </p>
          <div className={styles.actions}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Read the docs
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://github.com/bunchofscammers"
            >
              Browse GitHub
            </Link>
          </div>
          <p className={styles.status}>Built for fun. That&apos;s it.</p>
        </div>
      </main>
    </Layout>
  );
}
