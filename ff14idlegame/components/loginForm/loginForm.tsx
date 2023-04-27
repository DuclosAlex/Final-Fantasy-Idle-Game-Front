import axios from 'axios';
import { useState } from 'react';

export const LogForm:React.FC = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const handleInputChange = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target;
        switch(name) {
            case 'email' : 
                setEmail(value);
                break;
            case 'password' :
                setPassword(value);
                break;
            default : break;
        }
    }

    const login = async (event: any) => {
        event.preventDefault();
        try {

            const data = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            console.log(data);
            return console.log(data);
        } catch(e: any) {
            console.log(e.error)
        }
    }

    return (
        <form onSubmit={login} method='post' className='form-control pt-8 border-t-4 border-gold'>
            <label className="label">
                    <span className='mx-auto text-white text-2xl font-bold mb-8'>Déjà inscrit ? Connectez-vous ?  </span>
            </label>
            <input name='email' type="email" placeholder='email...' required minLength={10} onChange={handleInputChange} className="input input-bordered bg-white my-4 mx-auto w-4/6 h-16 text-2xl" />
            <input name='password'  type="password" placeholder='password...' required minLength={10} onChange={handleInputChange} className="input input-bordered bg-white my-4 mx-auto w-4/6 h-16 text-2xl" />

            <button type='submit' className='btn hover:bg-primary-focus btn-active bg-primary mt-8 text-white text-2xl'>Validez</button>
        </form>
    )
}