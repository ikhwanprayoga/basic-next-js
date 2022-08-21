import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      <Image src={'/assets/cat.svg'} height={400} width={300} alt="kucing"/>
      <h1 className='title'>welcome to sikunning web ...</h1>
    </Layout>
  )
}

export default Home
