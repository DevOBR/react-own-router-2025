export default function Search({ routeParams }) {
  const { word } = routeParams
  return (
    <>
      <h1>My contact is here</h1>
      <h2>You were looking for: {word}</h2>
    </>
  )
}
