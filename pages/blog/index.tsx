import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import styles from './Blog.module.css';

interface BlogProps {
  dataPosts: Array<any>;
}

function blog(props: BlogProps) {
  const { dataPosts } = props;
  const router = useRouter();

  return (
    <Layout title="Blog Page">
      <h1>this is blog page</h1>
      {dataPosts.map((d: { id: number; title: string }) => (
        <div className={styles.card} key={d.id} onClick={() => router.push(`/blog/${d.id}`)}>
          <p>{d.title}</p>
        </div>
      ))}
    </Layout>
  )
}

export default blog

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return {
    props: {
      dataPosts: data
    }
  };
}

// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await res.json();
//   return {
//     props: {
//       dataPosts: data
//     }
//   };
// }