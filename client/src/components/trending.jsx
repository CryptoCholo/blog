import moment from "moment"

function TrendingItem() {
 
    return (
      <div className="flex flex-col w-full gap-3 px-3 py-5">
           <h3 className="text-black  text-base font-semibold">This Is A Trending Article</h3>
          <div className="flex justify-start gap-8">
                <p>Mr Cholo</p>
                <time>{ `${moment().toLocaleString().split(' ')[4]}`}</time>
          </div>
      </div>
    )
  }

  function Trending() {
 
    return (
      <div className="flex flex-col w-1/5 gap-3 px-5 py-5 text-black border border-slate-100 rounded-lg">
           <TrendingItem/>
           <TrendingItem/>
           <TrendingItem/>
           <TrendingItem/>
           <TrendingItem/>
      </div>
    )
  }

  export default Trending;