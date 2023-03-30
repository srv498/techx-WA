function accountFound(id) {
    let accounts = {
        123000123: true,
        345000345: true,
        567000567: true,
        789000789: true,

    }

    if (accounts[id] === true) {
        return true
    }
    else {
        return false
    }
}

module.exports = accountFound