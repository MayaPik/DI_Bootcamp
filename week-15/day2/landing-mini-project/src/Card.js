import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Card(props) {
    const {title, img, text} = props
    return (
        <div className="row">
            <img src={img} alt={title} className="thumbnail" width='100px' height='100px'></img>
            <div className="column">
            <h1>{title}</h1>
            <p className="width">{text}</p>
            </div>
        </div>
    )
}

export default Card;
