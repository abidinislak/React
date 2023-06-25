import { Inter } from 'next/font/google'
import withLayout from '@/Layouts/withLayout';

const inter = Inter({ subsets: ['latin'] })

function Home() {

  function handleChange(e){
    console.log(e)
  }
  return (
    <>
     <h1>Index Page</h1>
     <input type="file" onChange={handleChange} />
    </>
  )
}

export default withLayout(Home);
