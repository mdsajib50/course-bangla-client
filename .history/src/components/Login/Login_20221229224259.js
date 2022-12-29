import { GithubAuthProvider, GoogleAuthProvider } from '@firebase/auth';
import React, {useContext} from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const {providerLogin, signIn} = useContext(AuthContext)

    const navigate = useNavigate()

    const handelSignIn =(e)=>{
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            navigate('/home')
            form.reset()
        })
        .catch((e) => console.error(e))
    }

    const googleProvider = new GoogleAuthProvider()
    const handelGoogleLogin= ()=>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate('/home')
        })
    }

    const gitHubProvider = new GithubAuthProvider()
    const handelGitHubLogin = () =>{
        providerLogin(gitHubProvider)
        .then(result =>{
            const 
        })
    }
    return (
        <div>
            
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex="0" className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login to your account</p>
                    <p tabIndex="0" className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Dont have account? <a href="/signup"   className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"> Sign up here</a></p>
                    <button onClick={handelGoogleLogin} aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google"/>
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>
                    <button aria-label="Continue with github" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg" alt="github"/>                            
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
                    </button>
                    
                    <div className="w-full flex items-center justify-between py-5">
                         <hr className="w-full bg-gray-400"/>
                         <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                         <hr className="w-full bg-gray-400  "/>
                        </div>
                    <form onSubmit={handelSignIn}>
                        <div>
                            <label htmlFor="email" id="email" className="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input aria-labelledby="email" name="email" type="email" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                        </div>
                        <div className="mt-6  w-full">
                            <label htmlFor="password" className="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                           <div className="relative flex items-center justify-center">
                            <input id="password" name="password" type="password" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                           </div>
                        </div>
                        <div className="mt-8">
                            <button role="button" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Login</button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;