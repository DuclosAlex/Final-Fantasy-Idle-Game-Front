import axios from 'axios';
import { useState } from 'react';
import { RegisterForm } from '../registerForm/RegisterForm';
import { LogForm } from '../loginForm/loginForm';

export const HomeForm:React.FC = () => {

    return (
        <div className="container mx-auto text-center flex flex-col p-6 h-auto w-1/6 bg-blue mt-32 shadow rounded-2xl">
            <RegisterForm />
            <LogForm />
        </div>

    )
}
