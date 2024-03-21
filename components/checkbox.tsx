interface CheckBoxT {
  name: string
  id: string
}

const CheckBox = (props: CheckBoxT) => <input type='checkbox' name={props.name} id={props.id} className='w-5 h-5 rounded text-cyellow focus:ring-0 focus:ring-offset-0' />

export default CheckBox