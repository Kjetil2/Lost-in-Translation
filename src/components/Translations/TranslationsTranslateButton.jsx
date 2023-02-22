const TranslationsTranslateButton =({word, onSelect}) => {
    return (
        <button onClick={() => onSelect(word.id)}>
            <aside>
                <img src ={word.image} alt={word.name} width ="250" />
            </aside>
            <section>
                <b> {word.name}</b>
            </section>
        </button>
    )
}
export default TranslationsTranslateButton