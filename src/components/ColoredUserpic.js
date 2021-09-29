import s from './ColoredUserpic.module.css'
import avatar from '../avatar.png'

function ColoredUserpic(props) {
    return (
        <div>
            <div className={s.avatar}>
                <div className={s.avatar__bg}>
                    <img className={s.avatar__img} src={avatar} alt="avatar" />
                </div>
            </div>
        </div>
    );
}

export default ColoredUserpic