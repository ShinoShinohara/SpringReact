import NotificationButton from '../NotificationButton';
import './style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from "../../utils/request"
import { Sale } from '../../models/sale';
import * as React from 'react';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`).then(response => {
            setSales(response.data.content);
        })
    }, [minDate, maxDate]);

    return (
        <div className="dsmeta-card">
            <h2 className="vendash2">Vendas</h2>
            <div>
                <div className="form-restrict">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="form"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="form-restrict">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="form"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-table">
                    <thead>
                        <tr>
                            <th className="showid">ID</th>
                            <th className="showdata">Data</th>
                            <th>Vendedor</th>
                            <th className="showvisitas">Visitas</th>
                            <th className="showvendas">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sales.map(sale => {
                                return (<tr key={sale.id}>
                                    <td className="showid">#{sale.id}</td>
                                    <td className="showdata">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="showvisitas">{sale.visited}</td>
                                    <td className="showvendas">{sale.deals}</td>
                                    <td>{sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="red-btn-container">
                                            <NotificationButton saleId={sale.id}/>
                                        </div>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SalesCard
