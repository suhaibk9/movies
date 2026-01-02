const useDebounce = (CB, delay) => {
    let timer;
    return (...args) => {
        console.log('timerId', timer);
        clearTimeout(timer);

        timer = setTimeout(() => {
            CB(...args)
        }, delay);
        console.log('timerId', timer)
    }
}
export default useDebounce;