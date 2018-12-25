export default function createAction(type, value) {
    return typeof value !== 'object' ?
        {
            type,
            value
        } : Object.assign({type}, value);
}