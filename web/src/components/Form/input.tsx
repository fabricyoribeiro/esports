import { InputHTMLAttributes } from "react";

//para poder passar todas as propriedades do input
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function Input(props: InputProps){
  return (
    <input
     {...props} //recebe todas as propriedades que chegar

    className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
    />
  )
}