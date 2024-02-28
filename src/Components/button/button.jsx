import "../button/button.scss"
import logo from "./c.png"

function button({text = "click",nimadir = "nimadir",hasicon = false,}){
    return(
        <button className={`button ${nimadir}`}>
            {text}
            {hasicon === true ?(
                <img src={logo} width={20} height={20} alt="logo" />
            ) : null}
        </button>
    )

}

export default button;