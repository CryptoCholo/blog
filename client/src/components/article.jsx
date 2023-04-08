import moment from "moment";
import { Link } from 'react-router-dom';


function Article({title}) {
 
    return (
      <div className="flex flex-col w-[48.2%] justify-start bg-slate-50 px-8 pt-5 pb-5 text-black border border-slate-100 rounded-lg" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
           
           <Link><h2  to='/article' className=" text-start text-2xl text-black font-bold">{title}</h2></Link>
          <div className="flex justify-start gap-5 mt-2 italic text-slate-600">
                <p>@Mr Cholo</p>
                <time>{ `${moment().format('MMMM DD, YYYY')}`}</time>
          </div>
          <div className="flex justify-between gap-8 mt-10">
              <span className="w-1/3 flex gap-7">
                <span className="flex  items-center gap-2">10 <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 96.294 96.294" xmlSpace="preserve">
                            <g>
                            <path d="M64.755,14.763c11.324,0,20.537,9.214,20.537,20.538c0,11.024-18.056,30.068-37.148,44.51
                                C29.066,65.389,11,46.337,11,35.301c0-11.324,9.213-20.538,20.537-20.538c3.836,0,7.572,1.062,10.806,3.07l5.803,3.605l5.804-3.604
                                C57.184,15.825,60.919,14.763,64.755,14.763 M64.755,3.763c-5.909,0-11.625,1.63-16.609,4.726
                                c-4.984-3.096-10.699-4.726-16.609-4.726C14.147,3.763,0,17.91,0,35.301c0,22.539,38.227,51.024,45.892,56.507
                                c0.663,0.473,1.442,0.723,2.255,0.723c0.816,0,1.599-0.252,2.257-0.727c7.664-5.483,45.89-33.981,45.89-56.503
                                C96.292,17.911,82.145,3.763,64.755,3.763L64.755,3.763z" strokeWidth="2px" />
                        </g>
                        </svg>
                    </span>
                    <span className="flex items-center gap-2">20  
                        <svg id="Layer_1" dataname="Layer 1"  width="14px" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.86 122.88"><title>comment</title><path d="M30.28,110.09,49.37,91.78A3.84,3.84,0,0,1,52,90.72h60a2.15,2.15,0,0,0,2.16-2.16V9.82a2.16,2.16,0,0,0-.64-1.52A2.19,2.19,0,0,0,112,7.66H9.82A2.24,2.24,0,0,0,7.65,9.82V88.55a2.19,2.19,0,0,0,2.17,2.16H26.46a3.83,3.83,0,0,1,3.82,3.83v15.55ZM28.45,63.56a3.83,3.83,0,1,1,0-7.66h53a3.83,3.83,0,0,1,0,7.66Zm0-24.86a3.83,3.83,0,1,1,0-7.65h65a3.83,3.83,0,0,1,0,7.65ZM53.54,98.36,29.27,121.64a3.82,3.82,0,0,1-6.64-2.59V98.36H9.82A9.87,9.87,0,0,1,0,88.55V9.82A9.9,9.9,0,0,1,9.82,0H112a9.87,9.87,0,0,1,9.82,9.82V88.55A9.85,9.85,0,0,1,112,98.36Z" strokeWidth="2px"/>
                        </svg>
                    </span>
              </span>
              <span className="flex items-center gap-2">5 min 
                    <svg fill="#000000" width="18px" height="18px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z" strokeWidth="2px"/>
                    </svg>
                </span>
          </div>
      </div>
    )
  }
  
  export default Article
  