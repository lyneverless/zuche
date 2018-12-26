export default function createAction(type, value) {
    return Object.prototype.toString.call(value) !== '[object Object]' ?
        {
            type,
            value
        } : Object.assign({type}, value);
}