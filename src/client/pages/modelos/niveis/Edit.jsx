import React from "react";
import { GetNewAction, SearchForEditAction } from "../../../actions/modeloNiveisActions"
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from "reactstrap";
import { emptyOr } from "../../../../utils/null";

export class Edit extends React.PureComponent {

    componentDidMount() {
        const id = emptyOr(this.props.match.params["id"], -1);

        if (id == -1) {
            this.props.GetNewAction();
        }
        else {
            this.props.SearchForEditAction(id);
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>{`${this.props.inEdit.id == -1 ? "Novo" : "Editando"} Modelo de Níveis`}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <input 
                            type="text"
                            maxLength="35"
                            value={this.props.inEdit.nome}
                        />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-right">
                        <Button color="success">Salvar</Button>
                        <Button color="link">Cancelar</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => 
({
    inEdit: state.modeloNiveis.inEdit,
    isFetching: state.modeloNiveis.isFetching
});


const mapDispatchToProps = dispatch => 
({
    GetNewAction: () => dispatch(GetNewAction()),
    SearchForEditAction: id => dispatch(SearchForEditAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);