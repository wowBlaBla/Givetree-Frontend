import axios from "axios";
import { FC, useState } from "react"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useLocation } from "wouter";
import * as yup from 'yup';
import { openModal, updateAuthed } from "../store/actions/auth.action";
import { LoadingIcon } from "./icons/LoadingIcon";

interface ErrorInterface {
    email?: string;
    password?: string;
}

interface InnerType {
    path: string;
    message: string;
}

export const SigninWithEmail:FC = () => {
    const dispatch = useDispatch();
    const [, setLocation] = useLocation();

    const [isLoading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<ErrorInterface>({});
    
    const registerByEmail = async() => {
        try {
            const schema = yup.object().shape({
                email: yup.string().email().required(),
                password: yup.string().min(8).required(),
            })
            const payload:object = {
                email, password
            };
            const _errors:ErrorInterface = {};
            await schema.validate(payload, { abortEarly: false }).catch(err => {
                const { inner } = JSON.parse(JSON.stringify(err));
                inner.map((item:InnerType) => {
                    _errors[item.path as keyof ErrorInterface] = item.message;
                });

                setErrors(_errors);
            });
            if (Object.keys(_errors).length) return;
            setLoading(true);
            await axios.post(`${process.env.BACKEND}/api/auth/login-email`, payload).then(res => {
                console.log(res.data);
                localStorage.sessions = JSON.stringify(res.data);
                toast.success("You have logged in successfully!");
                dispatch(openModal(false));
                dispatch(updateAuthed(true));
                setLocation('/profile/creator/home');
            }).catch(err => {
                if (err?.response?.data?.message) {
                    toast.error(err?.response?.data?.message);
                }
            });
            setLoading(false);
        } catch(err) {

        }
    }

    return (
        <div className="flex flex-col gap-5 items-center sm:mt-0 sm:ml-4">
            <h2 className="text-3xl leading-6 font-medium text-white">Sign in</h2>
            <div className="flex flex-col gap-3 py-10 border rounded-lg bg-gray-600 border-base-content border-opacity-50 px-12 w-full">
                <div className="text-white flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">Email</h3>
                    <h4>Sign in</h4>
                </div>
                <div className="form-layout flex flex-col gap-2">
                    <div className="input-form-group flex flex-col items-start">
                        <label className="text-white font-bold">Email</label>
                        <input
                            type="email"
                            className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm text-white border rounded-md p-3 bg-transparent ${errors?.email ? "border-red-500" : "border-gray-300 border-opacity-25 "}`}
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                        <span className="text-red-500 text-xs mt-1">{errors?.email}</span>
                    </div>
                    <div className="input-form-group flex flex-col items-start">
                        <label className="text-white font-bold">Password</label>
                        <input
                            type="password"
                            className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm text-white border rounded-md p-3 bg-transparent ${errors.password ? "border-red-500" : "border-gray-300 border-opacity-25 "}`}
                            placeholder="Enter a secure password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                        />
                        <span className="text-red-500 text-xs mt-1">{errors.password}</span>
                    </div>
                </div>
                <div>
                    <button
                        className={`flex text-white justify-center items-center mt-2 p-3 gap-1 rounded-lg bg-cyan-600 text-sm sm:text-sm font-bold tracking-wide cursor-pointer button-hover w-full`}
                        onClick={registerByEmail}
                        disabled={isLoading}
                    >
                        <span>Sign in</span>
                        { isLoading ? <LoadingIcon className="w-6 h-6"/> : ""}
                    </button>
                </div>
            </div>
        </div>
    )
}