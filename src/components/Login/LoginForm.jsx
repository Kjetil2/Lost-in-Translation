import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import {loginUser } from '../../api/user'
import { storageSave } from "../../utils/storage"
import {useNavigate} from 'react-router-dom'
import { useUser } from "../../context/UserContext"
import { STORAGE_KEY_USER } from "../../const/storageKeys"

const usernameConfig = {
    required: true,
    minLength: 2
}

const LoginForm = () => {
    //Hooks
    const {register, handleSubmit, formState: { errors }} = useForm()
    const{user, setUser} = useUser()
    const navigate = useNavigate()

    //Local state
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    //Side Effects
    useEffect(() => {
        if (user!== null){
            navigate('Translation')
        }
    }, [user, navigate])

    //Event Handlers
    const onSubmit = async ({username}) => {
        setLoading(true)
        const[error, userResponse] = await loginUser(username)
        if(error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)    
    };

    //Render Functions
    const errorMessage = (() =>{
        if (!errors.username){
            return null
        }

        if (errors.username.type ==='required'){
            return <span>Username is required</span>

        }

        if (errors.username.type === 'minLength'){
            return <span>Username is too short (minimum 2 char)</span>

        }
    })()

    return (
        <>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset-style">
                    {/* <label htmlFor="username">Username:</label> */}
                    <input className="input-style"
                        type="text"
                        placeholder="What's your name?"
                        {...register("username", usernameConfig)} 
                        />
                    <button className="submit-button" type="submit" disabled={ loading }>🡲</button>
                        {errorMessage}

                </fieldset>

                

                {loading && <p>Logging in...</p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}
export default LoginForm