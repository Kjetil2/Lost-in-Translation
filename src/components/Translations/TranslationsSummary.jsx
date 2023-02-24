import { useEffect, useState } from "react"



const  TranslationsSummary = ({word}) => {

    const [output, setOutput]= useState([])  
    
    useEffect(() => {
        setOutput(word.split("").map((letter, index) => (
          <img key={index} src={`/LostInTranslation_Resources/individial_signs/${letter}.png`} alt={""} />
        )))
      }, [word]);

    return(
        <section>
            
            <div className="translation-output-box">
                <img src={word.image} alt={word.name} width ="55" />
                {output}
            </div>
             
            
        </section>
    )

}
export default TranslationsSummary




