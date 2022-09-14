import { useDispatch, useSelector } from "react-redux/es/exports"
import { addUser } from "./User";

const Form = () => {
    //const user = useSelector((state) => state.user.user )
    const dispatch = useDispatch();
  return (
    <div>
      <input type="text" placeholder='First name'/>
      <input type="text" placeholder='Last name'/>
      <button onClick={() => dispatch(addUser())}>SUBMIT</button>
    </div>
  )
}

export default Form
