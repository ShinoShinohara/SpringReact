import axios from 'axios';
import icon from '../../assets/vector.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
    saleId: number;
}


function handleClick(saleId: number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`).then(response => {
        console.log("SUCESSO");
    })
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="red-btn-container" onClick={() => handleClick(saleId)}>
            <div className="red-btn"><img src={icon} alt="Notificar" /></div>
        </ div>
    );
}

export default NotificationButton
