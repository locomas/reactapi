import { Hero, PlayerCard } from '@/components'
import { fetchSports } from '@/utils'
import Image from 'next/image'


export default async function Home() {
  const allSports = await fetchSports();

  const isDataEmpty = !Array.isArray(allSports.data) || allSports.data.length === 0 || !allSports;

  console.log(allSports)
  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className='home__text-container'>
             <h1 className='text-4xl font-extrabold'>Players</h1>
             <p>Check out these cool NBA Players </p>

          </div>
          { !isDataEmpty ? (
            <section>
              <div className='home__player-wrapper'>
                <h1>Players</h1>
                 {allSports?.data.map((player) => (
                  <PlayerCard player ={player} /> 
                  
                  
                  ))}


              </div>
            </section>
          ): (
             <div className='home__error-container'>
               <h2>No results</h2>
               <p>{allSports.data?.message}</p>
            
             </div>
          )}

      </div>
    </main>
  )
}
