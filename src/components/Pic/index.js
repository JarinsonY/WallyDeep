export default function Pic ({id, title , alt_description , src})  {
    return (
        <div>
            <h4>{title}</h4>
            <small>{id}</small><br />
            <img alt={alt_description} src={src}/>
        </div> 
    );
}