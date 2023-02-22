import { useEffect, useState } from "react"



const  TranslationsSummary = ({word}) => {

    const [output, setOutput]= useState([])  
    
    useEffect(()=>{
        setOutput(word.split("").map(letter=><img src={require("C:/Users/KRonho/OneDrive/react/task 1/my-react-project/src/LostInTranslation_Resources/individial_signs/" + letter +".png")}></img>))
    }, [])

    return(
        <section>
            <h4>Translation summary</h4>
            <div>
                <img src={word.image} alt={word.name} width ="55" />
            </div>
             {output}
            
        </section>
    )

}
export default TranslationsSummary




