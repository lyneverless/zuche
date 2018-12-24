export default function createAction(type, value) {
    return typeof value !== 'object' ?
        {
            type: type,
            value: value
        } : Object.assign({type: type}, value);
}