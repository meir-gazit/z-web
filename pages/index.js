import Search from 'components/Search'
import Hero from 'components/Hero'
import Navbar from 'components/Navbar'

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
