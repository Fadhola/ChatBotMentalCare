const KonselingIndividu = {
    async render() {
        return `
        <div class="layanan-container">
            <div class="layanan-item">
                <div class="item-1">
                    <div class="e-conseling">e - Conseling</div>
                    <p class="sb">Mulai dari Rp 200.000 /sesi</p>
                    <ol>
                        <li>Konseling secara online</li>
                        <li>Pilihan waktu banyak</li>
                        <li>Dapat dilakukan dimana saja</li>
                        <li>Cocok jika terkendala jarak dan waktu</li>
                    </ol>
                    <button class="selengkapnya">
                        <a href="#/individu-e-konseling">Konsultasi Sekarang</a>
                    </button>
                </div>
                <div class="item-2">
                    <div class="conseling-corner">Conseling Corner</div>
                    <p class="sb">Mulai dari Rp 300.000 /sesi</p>
                    <ol>
                        <li>Konseling secara tatap muka di wilayah Yogyakarta</li>
                        <li>Konsultasi dilakukan lebih interaktif</li>
                        <li>Tempat konsultasi yang nyaman</li>
                    </ol>
                    <button class="selengkapnya-1">
                        <a href="#/individu-konseling-corner">Konsultasi Sekarang</a>
                    </button>
                </div>
            </div>
        </div>               
        `;
    },

    async afterRender() {

    }
}

export default KonselingIndividu;