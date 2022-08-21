import { useRouter } from 'next/router';
import Layout from "../../components/Layout";

interface Blog {
  id: string,
  title: string,
  body: string
}

interface BlogDetailProps {
  blog: Blog;
}

function BlogDetail(props: BlogDetailProps) {
  const { blog } = props
  return (
    <Layout title="Detail Blog Page">
      <div>
        <p>{blog.id}</p>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
      </div>
    </Layout>
  )
}

export default BlogDetail

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();

  const paths = data.map((r: Blog) => ({
    params: {
      id: `${r.id}`
    }
  })) 
  return {
    paths,
    fallback: true
  }
}

interface GetStaticProps {
  params: {
    id: string
  }
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params
  const rss = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const blog = await rss.json();

  return {
    props: {
      blog
    }
  }
}