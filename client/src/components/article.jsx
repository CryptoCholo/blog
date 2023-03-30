import moment from "moment"


function Article() {
 
    return (
      <div className="flex flex-col w-[48.2%] gap-3 px-8 py-10 text-black border border-slate-100 rounded-lg">
           <h2 className="text-black  text-2xl font-semibold">This Is The First Article In This Blog</h2>
          <div className="flex justify-start gap-8">
                <p>Mr Cholo</p>
                <time>{ `${moment().toLocaleString().split(' ')[4]}`}</time>
          </div>
          <div className="flex justify-start gap-8">
              <span>10 likes</span>
              <span>20 comments</span>
              <span>5 min read</span>
          </div>
      </div>
    )
  }
  
  export default Article
  