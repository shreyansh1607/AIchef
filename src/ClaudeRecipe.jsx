import ReactMarkdown from 'react-markdown'
import { forwardRef } from 'react'

const ClaudeRecipe = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
})

export default ClaudeRecipe