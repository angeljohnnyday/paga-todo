import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBank } from '../ducks/bank'

const Bank = ({ match, history, bank, getBank }) => {
    console.info(bank);

    React.useEffect(() => {
        getBank(match.params.id)
    }, [match.params.id, getBank])

    return (
        <div className="card text-center">
            <img className="card-img-top" src={bank.url} alt={bank.url} />
            <div className="card-body">
                <h5 className="card-title">{ bank.bankName }</h5>
                <p className="card-text">
                    { bank.description }
                </p>
                <button className="btn btn-info btn-sm" onClick={() => history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    )
}

Bank.defaultProps = {
    bank: {
        bankName: '',
        description: '',
        age: '',
        url: '',
    }
}

const mapStateToProps = (state, props) => {
    const params = {};
    const { id } = props.match.params;
    if(id) params.bank = state.bank.get[id];

    return params;
}

const mapDispatchToProps = dispatch => {
    return {
        getBank: id => dispatch(getBank(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Bank));
