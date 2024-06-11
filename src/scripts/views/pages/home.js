const Home = {
    async render() {
        return `
        <div class="background">
            <div class="custom-content">
                <div class="custom-content-container">
                    <div class="text-wrapper-1">Solusi Kesejahteraan Mental Anda</div>
                    <p class="p1">
                        Selamat datang di rumah kami untuk kesejahteraan kesehatan mental dan emosional. MentalCare berkomitmen
                        untuk memberikan sumber daya, informasi, dan dukungan yang Anda butuhkan. Mari jelajahi perjalanan menuju
                        kesehatan mental yang lebih baik.
                    </p>
                    <button class="consult-now">
                        <a href="#">Konsultasi Sekarang</a>
                    </button>
                </div>
                <img id="home" src="../img/home.png" alt="Home Image">
            </div>            
            <a href="whatsapp.com">
                <img src="img/whatsapp 1.png" class="whatsapp" alt="Gambar WhatsApp">
            </a>
        </div>
        
        <!-- about mentalcare -->
    <section class="about" id="about">
      <div class="container p-xxl-5 d-flex align-items-center">
        <div
          class="row d-md-flex justify-content-center align-items-center pt-md-5 pb-md-5"
        >
          <div class="col-md-5">
            <img
              src="img/Tentang kami 1.png"
              alt="about me"
              class="img-fluid mb-5 mb-md-0"
            />
          </div>
          <div class="col-md-6 col-lg-5 ps-md-5 text-center text-md-start">
            <h1 class="logo-about mt-2 mb-4">MentalCare</h1>
            <p class="content">
              Selamat datang di MentalCare, rumah online Anda untuk perawatan
              kesehatan mental yang peduli. MentalCare adalah platform yang
              didedikasikan untuk memberikan bantuan, dukungan, dan sumber daya
              yang Anda butuhkan untuk merawat dan memahami kesehatan mental
              Anda. MentalCare diciptakan untuk menghilangkan stigma seputar
              masalah kesehatan mental dan memberikan akses mudah ke informasi
              dan layanan yang dapat membantu Anda merasa lebih baik.
            </p>
          </div>
        </div>
      </div>
      </section>
      <!-- about layanan -->
      <section class="halaman-layanan">
        <div class="layanan-hero">
          <h1 class="judul">Kenapa Memilih MentalCare?</h1>
          <div class="layanan-container">
            <div class="profile-card-layanan">
              <!-- <div class="profile-image"> -->
              <img src="img/connection 1.png" alt="" class="profile-img" />
              <!-- </div> -->
              <div class="text-data">
                <p>
                  Cerita dimana saja,<br />
                  Kapan Saja <br /><br />
                </p>
              </div>
            </div>
  
            <div class="profile-card-layanan">
              <!-- <div class="profile-image"> -->
              <img src="img/secret 1.png" alt="" class="profile-img" />
              <!-- </div> -->
              <div class="text-data">
                <p>
                  Kamu bercerita,<br />
                  Kami jaga rahasia<br /><br />
                </p>
              </div>
            </div>
  
            <div class="profile-card-layanan">
              <!-- <div class="profile-image"> -->
              <img src="img/operator 1.png" alt="" class="profile-img" />
              <!-- </div> -->
              <div class="text-data">
                <p>
                  Menyediakan Akses ke<br />
                  Profesional Kesehatan<br />
                  Mental
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section class="konsultasi-page">
            <div class="konsultasii">          
            <h1 class="judul">Layanan Konseling</h1>
            <p class="subjudul">MentalCare menawarkan layanan konseling kesehatan mental yang berfokus pada kebahagiaan dan kesejahteraan anda bersama tim profesional yang telah kami sediakan siap membantu dalam mengatasi  masalah yang memengaruhi kesehatan mental anda.</p>
                <div class="konsultasi-container">
                    <div class="konsultasi-item">
                        <div class="item">
                            <img id="ki-img" src="img/layanan konseling individu.png" alt="konseling individu img">
                            <h1 class="judul-1">Konseling Individu</h1>
                            <p class="sb">Sering merasa cemas, insecure atau masalah lainnya? Yuk mulai langkah pertamamu bersama konsultasi bersama Psikolog Profesional MentalCare</p>
                       
                            <button class="selengkapnya">
                                <a href="../../konseling/konseling individu/konselingIndividu.html">selengkapnya</a>
                            </button>
                        </div>
                        <div class="item">
                            <img id="ki-img" src="img/layanan konseling pasangan.png" alt="konseling individu img">
                            <h1 class="judul-1">Konseling Pasangan</h1>
                            <p class="sb">Sedang mengalami masalah dengan pasangan? Diskusikan masalahmu dan temukan solusinya bersama Psikolog Profesional MentalCare</p>
                         
                            <button class="selengkapnya">
                                <a href="../../konseling/konseling pasangan/konselingPasangan.html">selengkapnya</a>
                            </button>
                        </div>
                        <div class="item">
                            <img id="ki-img" src="img/layanan konseling keluarga.png" alt="konseling individu img">
                            <h1 class="judul-1">Konseling Keluarga</h1>
                            <p class="sb">Proses konsultasi yang melibatkan anggota keluarga dengan tujuan menyelesaikan masalah demi tercapainya keluarga yang harmonis.</p>
                        
                            <button class="selengkapnya">
                                <a href="../../konseling/konseling keluarga/konselingKeluarga.html">selengkapnya</a>
                            </button>
                        </div>
                    </div>
                </div>  
            </div>
    </section>   
    <section class="psikolog" id="psikolog">
        <div class="psikolog-hero">
          <h1>Psikolog MentalCare</h1>
          <div class="psikolog-container">
            <a  href="../../psikolog/psikolog.html" class="profile-card">
              <div class="profile-image">
                <img src="img/profile1.png" alt="" class="profile-img" />
              </div>
              <div class="text-data">
                <span class="jobs">Psikolog Klinis Umum</span>
                <span class="name">Faradiba, M.Psi., Psikolog</span>
                <span class="experience">4 Tahun</span>
                <span class="kepuasan">100% Puas</span>
              </div>
            </a>
  
            <a href="../../psikolog/psikolog.html" class="profile-card">
              <div class="profile-image">
                <img src="img/profile2.png" alt="" class="profile-img" />
              </div>
              <div class="text-data">
                <span class="jobs">Psikolog Klinis Dewasa</span>
                <span class="name">Fauzan, M.Psi., Psikolog</span>
                <span class="experience">10 Tahun</span>
                <span class="kepuasan">100% Puas</span>
              </div>
            </a>
  
            <a href="../../psikolog/psikolog.html" class="profile-card">
              <div class="profile-image">
                <img src="img/profile3.png" alt="" class="profile-img" />
              </div>
              <div class="text-data">
                <span class="jobs">Psikolog Klinis Umum</span>
                <span class="name">Enji, M.Psi., Psikolog</span>
                <span class="experience">8 Tahun</span>
                <span class="kepuasan">100% Puas</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="artikel-cards" id="artikel">
        <div class="judul-art">
          <h2>Artikel Kesehatan Mental</h2>
        </div>
        <div class="artikel-container">
          <div class="item-artikel">
              <img
                class="artikel-img"
                src="img/artikel 1.jpg"
                alt=""
              />
            <h4 class="judul-artikel">
              Saat Merasa Depresi, Kapan Kita Harus ke Psikolog ?
            </h4>
            <div class="isi-art">
              <p>
                Depresi adalah ketika seseorang tidak lagi merasakan
                kehidupan yang sepenuhnya hidup. Kondisi ini tentunya
                jangan sampai dibiarkan terlalu lama atau akan semakin
                banyak lagi makna hidup yang akan dilewatkan.
              </p>
            </div>
            <button class="selengkapnya">
              <a href="../../artikel/artikel1.html">selengkapnya</a>
          </button>
          </div>
          <div class="item-artikel">
            <img
                class="artikel-img"
                src="img/artikel 2.jpg"
                alt=""
              />
            <h4 class="judul-artikel">
              Ketika Sekadar Menjalani Hidup Aja Rasanya Sangat Sulit
            </h4>
            <div class="isi-art">
              <p>
                Pernah nggak sih suatu hari kamu ngerasain capek yang
                benar - benar sampai nggak bisa melakukan apapun? Rasanya
                badan lemah letih dan otak nggak mau diajak kerjasama
                untuk berpikir. Yuk disimak dulu.
              </p>
            </div>
            <button class="selengkapnya">
              <a href="../../artikel/artikel2.html">selengkapnya</a>
          </button>
          </div>
          <div class="item-artikel">
            <img
                class="artikel-img"
                src="img/artikel 3.jpg"
                alt=""
              />
            <h4 class="judul-artikel">
              Mengatasi Berbagai Perasaan dan Pikiran Negatif yang Hadir
            </h4>
            <div class="isi-art">
              <p>
                Sebenarnya lumrah banget yang namanya manusia punya
                pikiran yang nggak nyaman seperti kesepian, kecemasan,
                perasaan takut sendiri, hingga galau nggak karuan. Di
                artikel kali ini, mari mencoba mengurai berbagai cara
                untuk menghadapi pikiran yang negatif ini.
              </p>
            </div>
            <button class="selengkapnya">
              <a href="../../artikel/artikel3.html">selengkapnya</a>
          </button>
          </div>
          <div class="item-artikel">
            <img
                class="artikel-img"
                src="img/artikel 4.jpg"
                alt=""
              />
            <h4 class="judul-artikel">
              Yakin Dia Adalah yang Terbaik untukmu?
            </h4>
            <div class="isi-art">
              <p>
                Seumur hidup memang terlalu lama untuk berjuang sendirian
                dalam rumah tangga, berharap pasangan berubah, menahan
                sendiri beban hingga memaksakan segala keadaan biar tetap
                utuh. Jangan lupa tanyakan pada diri sendiri apakah dia
                orang yang tepat?
              </p>
            </div>
            <button class="selengkapnya">
              <a href="../../artikel/artikel4.html">selengkapnya</a>
          </button>
          </div>
        </div>
      </section>
    <section class="testimoni" id="testimoni">
        <div class="judul-testimoni">
          <h1>Kata Mereka yang Telah Bersama MentalCare</h1>
          <p class="p-testi">Sekarang Giliranmu Berproses</p>
        </div>
        <div class="testimoni-container">
          <div class="profile-cardd">
            <div class="profile-image">
              <img src="img/profile3.png" alt="" class="profile-img" />
            </div>
            <div class="text-data">
              <h2>Anonymous</h2>
              <p>
                Sangat membantu proses penyembuhan dan psikolog sangat mengerti
              </p>
            </div>
          </div>
  
          <div class="profile-cardd">
            <div class="profile-image">
              <img src="img/profile1.png" alt="" class="profile-img" />
            </div>
            <div class="text-data">
              <h2>Anonymous</h2>
              <p>
                Sangat membantu proses penyembuhan dan psikolog sangat mengerti
              </p>
            </div>
          </div>
        </div>
      </section>         
    `;
},

async afterRender() {

}
}

export default Home;