// public: bisa diakses dari luar, maupun dari class turunannya
// private: ngga bisa diakses dari luar, ngga bisa dipanggil dari class turunannya
// protected: bisa diakses dari luar, maupun dari class tunannya

class Person {
    #age

    constructor(name, address) {
        this.name = name
        this.address = address
        this.#age = 25
        this._phone = "087555555555"
    }

    getName() {
        return this.name
    }

    setName(newName) {
        this.name = newName
    }

    // enkapsulasi (pembatasan)
    #getAddress() {
        return this.address
    }

    getFullAddress() {
        const fullAddress = `Saya tinggal di ${this.#getAddress()}`
        return fullAddress
    }

    getAge() {
        return this.#age
    }

    _getPhone() {
        return this._phone
    }
}

const akbar = new Person("Ade Maulana Akbar", "Jakarta")

console.log(akbar.getName())
console.log(akbar.getFullAddress())
console.log(akbar.getAge())
console.log(akbar._getPhone())


// inheritance (penurunan)

class Doctor extends Person {
    constructor() {
        super("Ridho", "Tanggerang")
    }

    getFullAddress() {
        return `${super.getFullAddress()}, Indonesia`
    }

    getPhone() {
        return this._phone
    }

    setPhone(newPhone) {
        this._phone = newPhone
    }
}

const ridho = new Doctor()
console.log(ridho.getName())
console.log(ridho.getFullAddress())
ridho.setPhone("021333333")
console.log(ridho.getPhone())