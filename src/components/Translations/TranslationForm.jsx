import { useForm } from "react-hook-form"


const TranslationForm = ({onTranslation}) => {

    const {register, handleSubmit}= useForm()

    const onSubmit = ({translationNotes}) => {onTranslation(translationNotes)}     
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset-style">
                {/* <label htmlFor = "translation-notes"> Translate</label> */}
                <input type = "text" {...register ('translationNotes')} placeholder ="Translate something...." className="input-style" />
                <button className="submit-button" type="submit">🡲</button>
            </fieldset>

            

        </form>
    )

}
export default TranslationForm