import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

function Layout(props: LayoutProps) {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>NextJS Basic | {title}</title>
        <meta name='description' content='Website NextJS Basic' />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout