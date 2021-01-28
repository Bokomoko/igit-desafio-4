import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IGTI - Trab 4</title>
      </Head>
      <h1>Servidor de API para acesso a contas em banco de dados MongoAtlas</h1>
    </div>
  );
}
