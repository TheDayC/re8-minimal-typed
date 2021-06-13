import { apiFetch } from '../helpers/fetch';

export function getData(): void {
    const options = {
        body: {},
        method: 'GET'
    };
    
    apiFetch(`http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT}/`, options).then(
        res => {
            if (res) {
                // TODO: Dispatch action to update store.
                console.log("🚀 ~ file: data.ts ~ line 11 ~ getData ~ res", res);
            }
        },
        error => console.warn(error.message)
    );

}