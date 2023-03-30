import Article from "./article"
import Trending from "./trending"


function Main() {
 
    return (
      <div className="flex w-full h-2/3 px-20 pt-10 font-serif">
        <div className=" flex flex-wrap h-max w-4/5 gap-5 ">
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
        </div>
        <Trending/>
      </div>
    )
  }
  
  export default Main
  