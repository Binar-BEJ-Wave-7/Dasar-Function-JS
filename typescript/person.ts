class Person {
    public name: string
    public address: string

    protected age: number
    private phone: string

    constructor(name, address) {
        this.name = name
        this.address = address

        this.age = 25
        this.phone = "021456789"
    }

    private getPhone() {
        return this.phone
    }

    public getName() {
        return this.name
    }

    protected getAge() {
        return this.age
    }
}

const christofer = new Person("Chris", "Jakarta")

class Doctor extends Person {
    constructor() {
        super("Dustin", "Surabaya")
    }

    public getAge(): number {
        super.getAge()
        super.getPhone()
    }
}

// private: gabisa dipanggil dari luar, gabisa dipanggil dari inheritance
// public: bisa dipanggil dari luar
// protected: gabisa dipanggil dari luar, bisa dipanggil dari inheritance
// bisa dipanggil dari dalam class tersebut

christofer.getName()
christofer.getAge()