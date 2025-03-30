import Navbar from '../Components/Navbar'
import List from '../Components/List'

function Home() {
  return (
    <div className="has-background-grey-lighter" style={{ minHeight: '100vh' }}>
        <Navbar />
        <List />
    </div>
  )
}

export default Home