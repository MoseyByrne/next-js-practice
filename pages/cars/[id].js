// for each individual car
// we'll add a component that has a file
// name of [paramname].js
// the brackets make this route dynamic
// which means anytime a user navigates to cars
// slash whatever (cars slash tesla)
// it will render the component in this file.

import { useRouter } from "next/router"; // useRouter hook allows us to access the query parameters from the url

import Head from "next/head";
import styles from '../../styles/Home.module.css';

export default function Car({ car }) { // use the prop here

  const router = useRouter()
  const { id } = router.query
  return (
      <div className={styles.container}>
          <Head>
              <title>{car.color} {car.id}</title>
          </Head>

          <main className={styles.main}>
              <h1 className={styles.title}>
                  {id}
              </h1>

              <img src={car.image} alt='' width="300px" />

          </main>
      </div>
  )
}

// for Server-Side Rendering
export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
      props: { car: data },
  }
}

// getStaticProps() tells next to prerender page

// export async function getStaticProps({ params }) {

//   const req = await fetch(`http://localhost:3000/${params.id}.json}`);
//   const data = await reg.json();

//   return {
//     props: { car: data },
//   }
// }

// getStaticPaths() tell next which dynamic pages to render

// export async function getStaticPaths() {

//   const req = await fetch(`http://localhost:3000/${params.id}.json}`);
//   const data = await reg.json();

//   const paths = data.map(car => {
//     return { params: { id: car } }
//   })

//   return {
//     paths,
//     fallback: false
//   };

// }