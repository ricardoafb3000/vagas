import React from "react";
import { SearchAction } from "../../../actions/modeloNiveisActions"
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Alert } from "reactstrap";

export class Pesquisa extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.SearchAction(null);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Modelo de Níveis</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-2 text-right">
                        <Button color="primary" onClick={() => this.props.history.push("/modelos/niveis/novo")} >Novo</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {
                        this.props.modeloNiveis.isFetching
                        ?
                        <div>Loading...</div>
                        :
                        this.props.modeloNiveis.items.length == 0
                        ?
                            <Alert>Nenhum Modelo de Níveis encontrado</Alert>
                        :
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Níveis</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.modeloNiveis.items.map(modeloNivel =>
                                    <tr key={modeloNivel.id} onDoubleClick={() => this.props.history.push(`/modelos/niveis/edit/${modeloNivel.id}`)}>
                                        <td>{modeloNivel.nome}</td>
                                        <td>{modeloNivel.niveis.toString()}</td>
                                    </tr>    
                                )
                            }
                            </tbody>
                        </table>
                    }
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => 
({
    modeloNiveis: state.modeloNiveis
});

const mapDispatchToProps = dispatch => 
({
    SearchAction: filters => dispatch(SearchAction(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pesquisa);