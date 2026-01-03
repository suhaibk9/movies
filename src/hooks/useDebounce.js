const useDebounce = (CB, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            CB(...args)
        }, delay);
    }
}
export default useDebounce;