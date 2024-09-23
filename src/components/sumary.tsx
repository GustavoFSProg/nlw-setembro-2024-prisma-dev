import { useEffect, useState } from 'react'

function Summary({ sum }) {
  // const [summary, setSummary] = useState<any>(null)

  // // const { data } = useQuery<any>({
  // //   queryKey: ['summary'],
  // //   queryFn: getSummary,
  // // })
  // async function Get() {
  //   const response = await fetch('http://localhost:3333/summary')
  //   //   const response = await fetch('https://in-orbit-nine.vercel.app/summary')
  //   const data = await response.json()
  //   console.log(data)
  //   setSummary(data)
  //   return data
  // }

  // useEffect(() => {
  //   Get()
  // }, [])

  return (
    <>
      <p>Completions ola Total:___ {sum.completion_obj}</p>
      <p>Goals Total Summary: ___{sum.goals_tot}</p>
    </>
  )
}

export default Summary
