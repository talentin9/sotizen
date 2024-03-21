interface InputT {
  type: string
  placeholder: string
}

const Input = (props: InputT) => <input type={props.type} placeholder={props.placeholder} className='border border-gray-300 py-2 px-5 w-full focus:border-cyellow rounded outline-none placeholder:text-lg text-lg focus:ring-cyellow' />

export default Input