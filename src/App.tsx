import './index.css'

import { Dialog } from './components/ui/dialog'
// import Sumary from './components/sumary'
import EmptyGoals from './components/empty-goals'
// import { useEffect, useState } from 'react'
import CreateGoal from './components/create-goal'
// import { useQuery } from '@tanstack/react-query'
// import { getSummary } from './http/get-summary'
import { useEffect, useState } from 'react'
import Summary2 from './components/sumary2'
// import Summary from './components/sumary'

// type SummaryResponse = {
//   completion_obj: number
//   total: number
//   goalsPerDay: Record<
//     string,
//     {
//       id: string
//       title: string
//       createdAt: string
//     }[]
//   >
// }

function App() {
  const [summary, setSummary] = useState<any>(null)

  // const { data } = useQuery<any>({
  //   queryKey: ['summary'],
  //   queryFn: getSummary,
  // })
  async function Get() {
    const response = await fetch('http://localhost:3333/summary')
    //   const response = await fetch('https://in-orbit-nine.vercel.app/summary')
    const data = await response.json()
    // console.log(data)
    setSummary(data)
    return data
  }

  useEffect(() => {
    Get()
  }, [])

  return (
    <>
      <Dialog>
        {summary?.completion_obj && summary.completion_obj > 0 ? (
          <Summary2 sum={summary} />
        ) : (
          <EmptyGoals />
        )}

        <CreateGoal />
      </Dialog>
    </>
  )
}

export default App
