import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';

function PayLinkList(props) {
    return (
        <Layout title={<Header title="Solicitação de Pagamento" />} >
            <div className="box">
                <div className="box-header"></div>
                <div className="box-body">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, eos.</p>
                </div>
            </div>
        </Layout>
    );
}

export default PayLinkList;
