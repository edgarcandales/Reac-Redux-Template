import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addingPersonaAction } from '../../redux/actions/personaAction';


const MainForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        dispatch(addingPersonaAction(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Name" type="text" {...register("name")} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input placeholder="Password" type="text" {...register("password", { required: true })} />
            <input type="submit" />
            {errors.password && <span>Password field is required</span>}
        </form>

    )
}

export default MainForm
