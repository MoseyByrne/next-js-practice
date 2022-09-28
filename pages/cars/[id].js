// for each individual car
// we'll add a component that has a file
// name of [paramname].js
// the brackets make this route dynamic
// which means anytime a user navigates to cars
// slash whatever (cars slash tesla)
// it will render the component in this file.

import { useRouter } from "next/router"; // useRouter hook allows us to access the query parameters from the url

export default function Car() {

  const router = useRouter()
  const { id } = router.query

  return <h1>Hello {id}</h1>
}