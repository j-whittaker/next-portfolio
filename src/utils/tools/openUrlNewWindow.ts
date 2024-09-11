const openUrlNewWindow : Function = (url : string ) => {
    if(typeof window == 'undefined' || window == null) {
        return;
    } 
    if(typeof window.open == 'function') {
        const newWindow = window.open(url, '_blank');
        newWindow && newWindow.focus();
    }
}

export default openUrlNewWindow;