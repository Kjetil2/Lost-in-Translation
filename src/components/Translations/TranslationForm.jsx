import { useForm } from "react-hook-form"


const TranslationForm = ({onTranslation}) => {

    const {register, handleSubmit}= useForm()

    const onSubmit = ({translationNotes}) => {onTranslation(translationNotes)}     
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor = "translation-notes"> Translate</label>
                <input type = "text" {...register ('translationNotes')} placeholder =" Word you like to translate" />
            </fieldset>

            <button type = "submit"> Translation</button>

        </form>
    )

}
export default TranslationForm