const openUrlNewWindow : (url : string) => void = (url : string ) => {
    if(typeof window == 'undefined' || window == null || !url) {
        return;
    } 
    if(typeof window.open == 'function') {
        const newWindow = window.open(url, '_blank');
        newWindow && newWindow.focus();
    }
}

export default openUrlNewWindow;