import React, {useContext, useState} from 'react';
import { AuthConext } from '../../context/AuthProvider';

const Login = () => {

    const [error, setError] = useState(null)
    const {logIn} = useContext(AuthConext);

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user)
        })
        .catch((error)=> {
            console.error(error)

        })
    }





    return (
        <section className='w-4/5 mx-auto my-20 py-20'>
            <div class="bg-slate-50 border-[#E16847] mx-auto max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100" style={{ border: "1px solid #E16847", boxShadow: "5px 15px 15px #E16847" }}>
                <h2 class="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p class="text-sm text-center dark:text-gray-400">Dont have account?
                    <a href="#" rel="noopener noreferrer" class="focus:underline hover:underline">Sign up here</a>
                </p>
                <div class="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" class="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
                <div class="flex items-center w-full my-4">
                    {/* <hr class="w-full dark:text-gray-400"> */}
                    <p class="px-3 dark:text-gray-400">OR</p>
                    {/* <hr class="w-full dark:text-gray-400"> */}
                </div>
                <form  class="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <label for="email" class="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <label for="password" class="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" class="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                    </div>
                    <button type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6  tracking-wide primary-bg-color hover:bg-[#db3a0d] text-black font-bold transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        style={{ background: "#E16847" }}>Sign in</button>
                </form>
            </div>
        </section>
    );
};

export default Login;