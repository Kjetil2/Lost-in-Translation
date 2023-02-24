import withAuth from "../hoc/withAuth"
import TranslationForm from "../components/Translations/TranslationForm"
import { useState } from "react"
import { useUser } from "../context/UserContext"
import{ translationAdd} from "../api/translation"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import TranslationsSummary from "../components/Translations/TranslationsSummary"



const WORD = [
    {
    id:1,
    name: "Logo",
    image: "LostInTranslation_Resources/Logo.png"
}
]

const  Translation = () => {
    const {user, setUser} = useUser()
    const [input, setInput] = useState("")

    const handelTranslateClicked = async (notes) =>{


        setInput(notes)

        const translate = (notes)

        const [error, updatedUser] = await translationAdd(user, translate)
        if(error !== null){
            return
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)

        console.log('Error', error);
        console.log('UpdatedUser', updatedUser);
    }



    return (
        <>  
            <nav className="centralizer">
            <h1>Translation</h1>
            </nav>
            <section id = "translation-options">
                {}
            </section>
            <section id="translation-notes">
                <TranslationForm onTranslation={handelTranslateClicked} />
            </section>
           
            {input && <TranslationsSummary word={input} />}

        </>
    )
}
export default withAuth (Translation)