import '../css/LanguageTag.css'

function LanguageTag({ language, color }) {
    return (
        <span 
            className="language-tag"
            style={{ backgroundColor: color }}
        >
            {language}
        </span>
    )
}

export default LanguageTag
