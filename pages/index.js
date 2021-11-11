import Head from 'next/head';
import AppLayout from '@components/Applayout';
import { colors } from '@styles/theme';
import Button from '@components/Button';
import GitHub from '@components/Icons/GitHub';

export default function Home() {
  return (
    <>
      <Head>
        <title>Devter 🐤</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/devter-logo.png" alt="logo" />
          <h1>Devter</h1>
          <h2>Talk about developmet <br /> with developers 👩‍💻👨‍💻</h2>
          <div>
            <Button>
              <GitHub width={24} height={24} fill={'#fff'} />
              Login with GitHub
            </Button>
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }

        div {
          margin-top: 16px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-botoom: 16px;
        }

        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
