import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/vector.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
    saleId: number;
}


function handleClick(saleId: number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`).then(response => {
        toast.info("SMS enviado com sucesso");
    });
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="red-btn-container" onClick={() => handleClick(saleId)}>
            <div className="red-btn"><img src={icon} alt="Notificar" /></div>
        </ div>
    );
}

export default NotificationButton
