import { Search, Hero, Navbar } from 'components'

export default function Home() {
  return (
    <div>
     <Navbar />
      <div className='shadow' />
      <Hero /> 
      <Search />
    </div>
  )
}
