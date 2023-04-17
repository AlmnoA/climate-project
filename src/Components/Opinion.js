import "../style.css"

export default function Opinion(props){
return (
    <div className="opinion-article">
        <h1>{props.title}</h1>
        <h2>By {props.author}</h2>
      </div>
);
}