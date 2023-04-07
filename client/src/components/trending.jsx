import moment from "moment"

function TrendingItem({title}) {
 
    return (
      <div className="flex flex-col w-full gap-3 px-3 py-5">
           <h3 className="text-black  text-base font-nedium">{title}</h3>
          <div className="flex justify-start gap-8">
            <span className="flex items-center gap-2">20  
              <svg id="Layer_1" dataname="Layer 1"  width="14px" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.86 122.88"><title>comment</title><path d="M30.28,110.09,49.37,91.78A3.84,3.84,0,0,1,52,90.72h60a2.15,2.15,0,0,0,2.16-2.16V9.82a2.16,2.16,0,0,0-.64-1.52A2.19,2.19,0,0,0,112,7.66H9.82A2.24,2.24,0,0,0,7.65,9.82V88.55a2.19,2.19,0,0,0,2.17,2.16H26.46a3.83,3.83,0,0,1,3.82,3.83v15.55ZM28.45,63.56a3.83,3.83,0,1,1,0-7.66h53a3.83,3.83,0,0,1,0,7.66Zm0-24.86a3.83,3.83,0,1,1,0-7.65h65a3.83,3.83,0,0,1,0,7.65ZM53.54,98.36,29.27,121.64a3.82,3.82,0,0,1-6.64-2.59V98.36H9.82A9.87,9.87,0,0,1,0,88.55V9.82A9.9,9.9,0,0,1,9.82,0H112a9.87,9.87,0,0,1,9.82,9.82V88.55A9.85,9.85,0,0,1,112,98.36Z" strokeWidth="2px"/>
              </svg>
            </span>
            <time className=" italic text-slate-600">{ `${moment().format('MMMM DD, YYYY')}`}</time>
          </div>
      </div>
    )
  }

  function Trending({subheading}) {
 
    return (
      <div className="flex flex-col w-full gap-3 px-5 py-5 bg-slate-50 h-max text-black border border-slate-100 rounded-lg" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
            <h2 className="text-xl font-bold">{subheading}</h2>
           <TrendingItem title="Understanding the Science of Sleep: Tips for Better Rest and Recovery"/>
           <TrendingItem title="The Benefits of a Minimalist Lifestyle and How to Embrace It"/>
           <TrendingItem title="The Psychology of Success: Traits and Habits of High Achievers"/>
      </div>
    )
  }

  export default Trending;