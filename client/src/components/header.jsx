import Nav from "./navItem"

function Header() {
 
    return (
      <div className="flex flex-col w-full h-max sticky top-0 bg-slate-50">
          <div className="w-full px-20 py-5 flex justify-between items-center h-2/3">
                <h2 className="text-3xl text-black font-extrabold">E Dey Happen</h2>
                <div className="w-1/3 h-full flex justify-center gap-3 items-center">
                    <input className="p-2 w-2/3 border border-black rounded-xl"  style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}} placeholder="Search"></input>
                    <button className="p-2 bg-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="25.6" height="25.6" viewBox="0 0 256 256" xmlSpace="preserve">
                            <defs>
                            </defs>
                            <g style={{stroke: "none", strokeWidth: 0, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "none", fillRule: "nonzero", opacity: 1}} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                <path d="M 87.803 77.194 L 68.212 57.602 c 9.5 -14.422 7.912 -34.054 -4.766 -46.732 c 0 0 -0.001 0 -0.001 0 c -14.495 -14.493 -38.08 -14.494 -52.574 0 c -14.494 14.495 -14.494 38.079 0 52.575 c 7.248 7.247 16.767 10.87 26.287 10.87 c 7.134 0 14.267 -2.035 20.445 -6.104 l 19.591 19.591 C 78.659 89.267 80.579 90 82.498 90 s 3.84 -0.733 5.305 -2.197 C 90.732 84.873 90.732 80.124 87.803 77.194 z M 21.48 52.837 c -8.645 -8.646 -8.645 -22.713 0 -31.358 c 4.323 -4.322 10 -6.483 15.679 -6.483 c 5.678 0 11.356 2.161 15.678 6.483 c 8.644 8.644 8.645 22.707 0.005 31.352 c -0.002 0.002 -0.004 0.003 -0.005 0.005 c -0.002 0.002 -0.003 0.003 -0.004 0.005 C 44.184 61.481 30.123 61.48 21.48 52.837 z" style={{stroke: "none", strokewidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                            </g>
                        </svg>
                    </button>
                </div>
          </div>
          <div className="w-screen  h-1/3 bg-indigo-600 border-t py-2 border-black ">
            <Nav/>
          </div>
      </div>
    )
  }
  
  export default Header
  