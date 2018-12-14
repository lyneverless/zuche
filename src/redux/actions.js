export default function createAction(type,value) {
    return {
        type: type,
        value: value
    };
    // {
    //     type: 'SHOW_LEFTNAV'
    // }
    // {
    //     type: 'HIDE_LEFTNAV'
    // }
    // {
    //     type: 'ROUTE_TOPNAV',
    //         value: '国内租'
    // }
    // {
    //     type: 'SLIDE_CAROUSEL'
    // }
}