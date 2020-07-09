const sum = (x, y) => {
    return x + y;
};

const pow = (x, y) => {
    if (x === null || y === null) {
        return null;
    }

    let res = 1;
    for (let i = 0; i < y; i++) {
        res *= x;
    }
    return res;
};

export default {
    sum,
    pow,
};
