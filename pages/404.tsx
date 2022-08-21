import { useEffect } from "react"
import { useRouter } from 'next/router';

function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div>
      <h1 className="title-not-found">Oooops...</h1>
      <h1 className="title-not-found">Halaman yang anda cari tidak ditemukan</h1>
    </div>
  )
}

export default Custom404