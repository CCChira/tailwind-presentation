import React from 'react';
import Button from './Button';
import Input from './Input';

export default function LoginForm() {
  return (
    <div className="px-10 mt-20">
      <Input
        modifiers="h-14 w-full mb-6 px-5 shadow-lg transition ease-in-out text-orange-primary focus:outline-0 focus:border-2 focus:border-orange-primary focus:animate-bounce"
        placeholder="Username"
      />
      <Input
        modifiers="h-14 lg:bg-red-300 w-full mb-6 px-5 shadow-lg transition ease-in-out text-orange-primary focus:outline-0 focus:border-2 focus:border-orange-primary focus:animate-bounce"
        placeholder="Passowrd"
      />
      <section className="flex gap-x-4">
        <Button modifiers="w-1/2" type="primary">
          Login
        </Button>
        <Button modifiers="w-1/2" type="secondary">
          Register
        </Button>
      </section>
    </div>
  );
}
