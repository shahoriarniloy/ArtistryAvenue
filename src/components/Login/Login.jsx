import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut} from "firebase/auth";
// import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../../firebase/firebase.init";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";


const Login = () => {
    

    const location = useLocation();

    const {signInUser} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email);
    
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Signed In");
    
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);

                toast.error("Invalid Credentials"); 
                
                navigate('/login');

            });
    }

    

    
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                toast.success("Signed In");
                const loggedInUser = result.user;
                navigate(location?.state?location.state:'/');

                
                setUser(loggedInUser);

            })
            .catch(error => {
                toast.error("Please check your credential or try again later ");
                console.log('error', error.message);
            });
    };

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.warning("Signed Out")

                setUser(null);
            })
            .catch(error => {
                console.log(error);
                toast.error("Failed to sign out");
            });
    };
    

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                toast.success("Signed In");
                const loggedUser = result.user;
                navigate(location?.state?location.state:'/');


                setUser(loggedUser);

            })
            .catch(error => {
                toast.error("Please check your credential or try again later ");

                console.log(error);
            });
    };

    return (
        <div className="max-w-[1400px] mx-auto mb-0 h-fit " >
            <Helmet>
                <title>Login</title>
            </Helmet>
            <form onSubmit={handleLogin} className="flex flex-col  items-center h-fit">
                <div className="w-1/2">
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Enter Your Email:</span>
                        </div>
                        <input type="text" name="email" placeholder="Type here" className="input input-bordered" />
                    </label>

                    <label  className="form-control mb-2">
                        <div className="label">
                            <span className="label-text">Enter Your Password:</span>
                        </div>
                        <div className="grid grid-cols-12 items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Type here"
                                className="input input-bordered rounded-r-none border-r-0 col-span-11"
                                required
                            />
                            <button
                                type="button" 
                                className="btn btn-outline p-0 rounded-l-none border-l-0 border-gray-300"
                                aria-label="Toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>


                    </label>


                   
                </div>

                <input type="submit" value="Log In" className="btn btn-success w-60 text-white" />

                
            {user ? (
                        <button onClick={handleGoogleSignOut} className="btn btn-red mt-0">Sign Out</button>
                    ) : (
                        <div>
                            <h2 className="text-sm text-center text-gray-600  mt-6 mb-2">Or, Sign In With:</h2>
                            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center gap-6"> 
                                <button onClick={handleGoogleSignIn} className="btn bg-white lg:mr-4 md:mr-4"><img className="w-12 h-auto" src="/images/google.png" alt="" style={{ width: "32px", height: "32px" }} />Google Login</button>
                                <button onClick={handleGitHubSignIn} className="btn bg-yellow-400"><img className="w-12 h-auto" src="/images/github.png" alt="" style={{ width: "32px", height: "32px" }}  />GitHub Login</button>
                            </div>
                        </div>
                    )}

                    {user && (
                        <div>
                            <h3>User: {user.displayName}</h3>
                        </div>
                    )}
                    <hr />
                    <h2 className="text-sm text-gray-600  mt-6 mb-2">Or,</h2>
                    <Link to="/signup"><button className="btn btn-primary w-60 mb-8">Create New Account</button></Link>

            </form>



        </div>
    );
};

export default Login;































