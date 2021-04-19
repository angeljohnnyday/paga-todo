const data = {
    items: [],
    get: {}
}

const PRODUCT_ALL           = 'PRODUCT_ALL'
const PRODUCT_ALL_ERR       = 'PRODUCT_ALL_ERR'
const PRODUCT_GET           = 'PRODUCT_GET'
const PRODUCT_GET_ERR       = 'PRODUCT_GET_ERR'

const handleGet = (state, bank) => {
    // const bank = state.items.find(b => b.id === parseInt(id));
    return { 
        ...state.get,
        [bank.id]: bank
    }
}

const apiAllBanks = async () => {
    const data = await fetch('https://api.jsonbin.io/b/604006e581087a6a8b95b784').then(res => res.json());
    return data.map((d, i) => { return { ...d, id: (i + 1) } })
}

const bank = (state = data, action) => {
    switch (action.type) {
        case PRODUCT_ALL:
            return { ...state, items: action.payload }
        case PRODUCT_ALL_ERR:
            return { ...data }
        case PRODUCT_GET:
            return { ...state, get: handleGet(state, action.payload) }
        case PRODUCT_GET_ERR:
            return { ...state }
        default:
            return state;
    }
}

export const allBanks = () => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_ALL,
            payload: await apiAllBanks()
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ALL_ERR
        });
    }
}

export const getBank = id => async dispatch => {
    const lst = await apiAllBanks()
    const bank = lst.find(b => b.id === parseInt(id));
    try {
        dispatch({
            type: PRODUCT_GET,
            payload: bank
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_GET_ERR
        });
    }
}

export default bank