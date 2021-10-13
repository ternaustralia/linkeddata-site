// const fetcher = (...args) => fetch(...args).then(res=> res.json())
export const fetcher = async (...args) => {
  const url = args[0]

  let fetchOptions = null
  if(args.length > 1) {
    fetchOptions = JSON.parse(args[1])
  }
  
  const res = await fetch(url, fetchOptions)

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}