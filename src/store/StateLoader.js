// Inicializa o state como unm objeto vazio
export const initializeState = () => ({});

// Carrega o state do localStorage
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');

        const stateObj = JSON.parse(serializedState);

        if (serializedState === null) {
            return initializeState();
        }

        return stateObj;
    } catch (error) {
        console.log(error)
        return initializeState();
    }
};

// Salva o state do localStorage
export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.log(error);
        return error;
    }
};
