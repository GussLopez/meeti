import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

export default function FormSubmit(props: Props) {

  return (
    <input
      {...props}
      type="submit"
      className="w-full p-2 uppercase mt-5 font-black cursor-pointer text-white bg-pink-600"
    />
  )
}
