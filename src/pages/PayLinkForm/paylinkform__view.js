import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';

function PayLinkForm(props) {
    return (
        <Layout title={<Header title="Solicitação de Pagamento" />} >
            <div className="box">
                <div className="box-header">
                    <p>Aqui você pode gerar cobranças para quem você quiser! Simples e fácil, preencha os dados e envie o link!</p>
                </div>

                <div className="box-body">
                    <form action="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="fullName">Nome completo da pessoa a ser cobrada</label>
                                    <input type="text" className="form-control" name="fullName" autoFocus />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" className="form-control" name="email" />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="cpf">CPF</label>
                                            <input type="text" className="form-control" name="cpf" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="cellphone">Celular</label>
                                            <input type="tel" className="form-control" name="cellphone" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone">Telefone</label>
                                            <input type="tel" className="form-control" name="phone" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="description">Descrição da fatura</label>
                                    <input type="text" className="form-control" name="description" />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="value">Valor</label>
                                            <input type="text" className="form-control" name="value" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="dueDate">Vencimento</label>
                                            <input type="text" className="form-control" name="dueDate" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="maxInstallments">Parcelas permitidas</label>
                                            <input type="text" className="form-control" name="maxInstallments" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label htmlFor="">
                                                    <input type="checkbox" /> Aceitar pagamento com boleto
                                                </label>
                                            </div>

                                            <div className="checkbox">
                                                <label htmlFor="">
                                                    <input type="checkbox" /> Aceitar pagamento com cartão
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary">
                            Gerar Solicitação
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default PayLinkForm;
