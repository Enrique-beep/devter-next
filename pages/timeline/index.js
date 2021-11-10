import Link from 'next/link'
import AppLayout from '@components/Applayout'
import styles from '@styles/Timeline.module.css'

export default function Timeline({ username }) {
  return (
    <>
      <AppLayout>
        <h1 className={styles.title}>{`This is the timeline of ${ username }`}</h1>
        <Link href="/"><a className={styles.link}>Go to Home</a></Link>
      </AppLayout>
    </>
  )
}

Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
    .then(res => res.json());
}
