class manusia {
    constructor (nama) {
        this.nama = nama;
    }
    acakAngka(){
        this.acakAngka = acakAngka
        Math.floor(Math.random() * 100) + 1;
    }

    tebakAngka(angka){
        this.angka = angka;
        if (this.angka > acakAngka ){
            return "Anda Menang"
        }
        return "Anda Kalah";
    }
}

const saya = new manusia ("andro");

