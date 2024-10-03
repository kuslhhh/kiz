import { SyntheticEvent, useState } from "react";
import axios from "axios";
import {useCookies} from "react-cookie"
import {useNavigate} from "react-router-dom"
import { UserErrors } from "../../models/error";

export const AuthPage = () => {
    return (
        <div>
            <Register />
            <Login />
        </div>
    );
};

const Register = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try{

            await axios.post("http://localhost:3000/user/register", {
                username,
                password
            });
            alert("Registered Successfully");
        } catch (error) {
            if(error?.response?.data?.type === UserErrors.USERNAME_ALREADY_EXISTS){
                alert("Username already exists");
            } else{
                alert("Something went wrong");
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="p-5">Register</h2>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        className="rounded-md m-2 p-1 bg-[#a9a9a9] placeholder:text-gray-600 text-black font-semibold"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="rounded-md m-2 p-1 bg-[#a9a9a9] placeholder:text-gray-600 text-black font-semibold"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-[#a9a9a9] text-black rounded-md p-2 m-2"
                        
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};


const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [ _, setCookie ] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try{

            const result = await axios.post("http://localhost:3000/user/login", {
                username,
                password
            });
            setCookie("access_token", result.data.token);
            localStorage.setItem("userId", result.data.userId);
            navigate("/");
        } catch (error) {

            let errorMessage: string = "";
            switch(error?.response?.data?.type){
                case UserErrors.NO_USER_FOUND:
                    errorMessage = "User not found";
                    break;
                case UserErrors.WRONG_CREDENTIALS:
                    errorMessage = "Incorrect Username/password";
                    break;
                case UserErrors.USERNAME_ALREADY_EXISTS:
                    errorMessage = "Username already exists";
                    break;
                default:
                    errorMessage = "Something went wrong";
                    break;
            }

            alert(errorMessage);

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="p-5">Login</h2>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        className="rounded-md m-2 p-1 bg-[#a9a9a9] placeholder:text-gray-600 text-black font-semibold"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="rounded-md m-2 p-1 bg-[#a9a9a9] placeholder:text-gray-600 text-black font-semibold"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-[#a9a9a9] text-black rounded-md p-2 m-2"
                        
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

