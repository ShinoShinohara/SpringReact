import icon from '../../assets/vector.svg'
import './style.css'

function NotificationButton() {
    return (
        <div className="red-btn-container">
            <div className="red-btn"><img src={icon} alt="Notificar" /></div>
        </div>
    );
}

export default NotificationButton
