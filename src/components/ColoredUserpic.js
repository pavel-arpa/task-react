import {useState} from 'react'
import avatar from "../avatar.png"

function ColoredUserpic(props) {
    const [bgColor, setBgColor] = useState({f: props.colors[1], s: props.colors[0]})

    const Avatar = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        marginTop: "100px",
        background: `linear-gradient(90deg, ${bgColor.f}, ${bgColor.s})`,
        borderRadius: "50%",
        width: `${props.size}px`,
        height: `${props.size}px`,
    }
    const AvatarBg = {
        width: `${props.size - props.colorWidth * 2}px`,
        height: `${props.size - props.colorWidth * 2}px`,
        backgroundColor: props.backgroundColor,
        borderRadius: "50%"
    }
    const AvatarImg = {
        background: "blue",
        borderRadius: "50%",
        width: `${props.size - props.colorWidth * 2 - props.margin * 2}px`,
        height: `${props.size - props.colorWidth * 2 - props.margin * 2}px`,
        margin: `${props.margin}px`
    }

    return (
        <div>
            <div style={Avatar}
                 onMouseEnter={() => setBgColor({f: props.colors[0], s: props.colors[1]})}
                 onMouseLeave={() => setBgColor({f: props.colors[1], s: props.colors[0]})}>
                <div style={AvatarBg}>
                    <img style={AvatarImg} src={avatar} alt={"avatar"}/>
                </div>
            </div>
        </div>
    );
}

export default ColoredUserpic