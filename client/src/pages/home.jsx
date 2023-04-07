import { Outlet } from 'react-router-dom';
import Header from "../components/header";


function Home() {
 
  return (
    <div className="App w-screen h-screen relative">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Home
