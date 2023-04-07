export default function Signup() {
    return (
    <>
        <div className= "h-screen w-screen bg-slate-200">
            <div className="h-full w-full flex flex-col items-center justify-center font-sans p-8">
                <div className="rounded-xl w-1/3 flex h-80 items-center justify-center py-12 px-3 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md rounded-xl space-y-8 bg-slate-100 p-5">
                        <div className="rounded-xl">
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black">
                            Sign up 
                        </h2>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-900 focus:outline-none focus:ring-yellow-900 sm:text-sm"
                                placeholder="Email address"
                            />
                            </div>
                            <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-900 focus:outline-none focus:ring-yellow-900 sm:text-sm"
                                placeholder="Password"
                            />
                            </div>
                            <div>
                            <label htmlFor="cpassword" className="sr-only">
                                Confirm Password
                            </label>
                            <input
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-900 focus:outline-none focus:ring-yellow-900 sm:text-sm"
                                placeholder="Confirm Password"
                            />
                            </div>
                        </div>
            
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-900 focus:ring-indigo-700"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                            </div>
            
                            <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-900 hover:text-indigo-700">
                                Forgot your password?
                            </a>
                            </div>
                        </div>
            
                        <div>
                            <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent text-indigo-100 py-2 px-4 text-sm font-bold bg-indigo-900 hover:text-indigo-900 hover:bg-indigo-400 focus:outline-none"
                            >
                            
                            Sign up
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}