import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

function detail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title={'Detail User Page'}>
      <h1>this is detail user page</h1>
      <h2>{id}</h2>
    </Layout>
  )
}

export default detail