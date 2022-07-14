import NotificationButton from '../NotificationButton';
import './style.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="vendash2">Vendas</h2>
            <div>
                <div className="form-restrict">
                    <input className="form" type="text" />
                </div>
                <div className="form-restrict">
                    <input className="form" type="text" />
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
                        <tr>
                            <td className="showid">#1</td>
                            <td className="showdata">28/04/1998</td>
                            <td>Shino</td>
                            <td className="showvisitas">16</td>
                            <td className="showvendas">8</td>
                            <td>R$ 5,00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="showid">#1</td>
                            <td className="showdata">28/04/1998</td>
                            <td>Shino</td>
                            <td className="showvisitas">16</td>
                            <td className="showvendas">8</td>
                            <td>R$ 5,00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="showid">#1</td>
                            <td className="showdata">28/04/1998</td>
                            <td>Shino</td>
                            <td className="showvisitas">16</td>
                            <td className="showvendas">8</td>
                            <td>R$ 5,00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SalesCard
