import Head from 'next/head'
import Styles from '../styles/Home.module.css'
import Head_bar from '../components/head_bar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LOFOTO</title>
        <link rel="icon" href="https://img2.thaipng.com/20171202/613/photo-camera-png-images-5a23069011d124.522661381512244880073.jpg" />
      </Head>
      <Head_bar/>
    </div>
  )
}
