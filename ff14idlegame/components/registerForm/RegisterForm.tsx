import axios from 'axios';
import { useState } from 'react';

export const RegisterForm:React.FC = () => {

    const [nickname, setNickname] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const handleInputChange = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target;
        switch(name) {
            case 'nickname' : 
                setNickname(value);
                break;
            case 'email' : 
                setEmail(value);
                break;
            case 'password' :
                setPassword(value);
                break;
            default : break;
        }
    }

    const registerUser = async (event: any) => {
        event.preventDefault();
        try {

            const data = await axios.post('http://localhost:5000/api/auth/register', { nickname, password, email});
            return console.log(data);
        } catch(e: any) {
            console.log(e.error)
        }
    }

    return (
        <form onSubmit={registerUser} method='post' className='form-control'>
            <label className="label">
                <span className='mx-auto text-white text-2xl font-bold mb-8'>Voulez-vous vous inscrire ? </span>
            </label>
            <input name='nickname' type="text" placeholder='pseudo...' required minLength={10} onChange={handleInputChange} className="input input-bordered bg-white my-4 mx-auto border-red w-4/6 h-16 text-2xl" />
            <input name='email' type='email' placeholder='email...' required minLength={10} onChange={handleInputChange} className="input input-bordered bg-white my-4 mx-auto w-4/6 h-16 text-2xl" />
            <input name='password'  type="password" placeholder='password...' required minLength={10} onChange={handleInputChange} className="input input-bordered bg-white my-4 mx-auto w-4/6 h-16 text-2xl" />

            <button type='submit' className='btn hover:bg-primary-focus btn-active bg-primary mt-8 text-white text-2xl mb-4'>Validez</button>
        </form>
    )
}