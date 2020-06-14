function getYear() {
    return new Date().getFullYear();
}

const greet = () => {
    console.group("Hello User!!!")
}

module.exports = {
    getYear: getYear,
    greet: greet
};




