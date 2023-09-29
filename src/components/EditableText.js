import './EditableText.css';
export const EditableText = ({value}) =>{
    return(
    <blockquote contenteditable="true">
    <p>{value}</p>
    </blockquote>
    )
}