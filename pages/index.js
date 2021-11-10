import Head from "next/head"
import Link from "next/link"
import AppLayout from "@components/Applayout"
import styles from "@styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Devter 🐤</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Devter</a>
        </h1>
        <nav>
          <Link href="/timeline">
            <a className={styles.link}>timeline</a>
          </Link>
        </nav>
      </AppLayout>
    </>
  );
}
