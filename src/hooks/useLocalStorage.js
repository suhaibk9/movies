const useLocalStorage = () => {
    const getFromLocalStorage = (key) => {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    };

    const storeInLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    return { getFromLocalStorage, storeInLocalStorage };
};

export default useLocalStorage;