import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { allBanks } from '../ducks/bank'

const Banks = ({ banks, allBanks }) => {
    React.useEffect(() => {
        allBanks();
    }, [allBanks])

    return (
        <>
            <table className="table table-sm table-bordered table-striped table-hover">
                <thead>
                    <tr className="text-center">
                        <th>Name</th>
                        <th>Descripion</th>
                        <th>Age</th>
                        <th>img</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {banks.map((b, i) => (
                        <tr key={i}>
                            <td>
                                <Link to={`/bank/${i + 1}`}>
                                    { b.bankName }
                                </Link>
                            </td>
                            <td>{ b.description }</td>
                            <td>{ b.age }</td>
                            <td>
                                <img src={b.url} alt={b.bankName} width="60" height="60" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = state => {
    return { banks: state.bank.items }
}

const mapDispatchToProps = dispatch => {
    return {
        allBanks: () => dispatch(allBanks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banks);
