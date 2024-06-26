const Daftar = {
    async render() {
        return `
 
    <section class="daftar-bg vh-100">
        <div class="container h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-lg-5 pt-xl-4">
              <div
                class="card text-black"
                style="
                  border-radius: 25px;
                  background-color: rgba(255, 255, 255, 0.9) !important;
                "
              >
                <div class="card-body p-4">
                  <div class="row justify-content-center">
                    <p class="text-center h1 fw-bold mb-4 mx-1 mx-md-3 mt-3">
                      Daftar
                    </p>

                    <form class="mx-1 mx-md-4" action="add.php" method="post">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c"
                            ><i class="bi bi-person-circle"></i> Username</label
                          >
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control form-control-lg py-3"
                            name="username"
                            autocomplete="off"
                            placeholder="Masukan alamat email anda"
                            style="
                              border-radius: 25px;
                              background-color: rgba(255, 255, 255, 0.3);
                            "
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c"
                            ><i class="bi bi-envelope-at-fill"></i> Email</label
                          >
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control form-control-lg py-3"
                            name="username"
                            autocomplete="off"
                            placeholder="Masukan alamat email anda"
                            style="
                              border-radius: 25px;
                              background-color: rgba(255, 255, 255, 0.3);
                            "
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c"
                            ><i class="bi bi-chat-left-dots-fill"></i>
                            Password</label
                          >
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control form-control-lg py-3"
                            name="username"
                            autocomplete="off"
                            placeholder="Masukan alamat email anda"
                            style="
                              border-radius: 25px;
                              background-color: rgba(255, 255, 255, 0.3);
                            "
                          />
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 px-2 py-1"
                      >
                        <input
                          type="submit"
                          value="Daftar"
                          name="register"
                          class="btn btn-primary btn-lg text-light my-2 py-3"
                          style="
                            width: 100%;
                            border-radius: 30px;
                            font-weight: 600;
                            background-color: #004080;
                          "
                          style="border-radius: 25px"
                        />
                      </div>
                    </form>
                    <p align="center">
                      Saya sudah memiliki akun!
                      <a
                        href="#/login"
                        class="text-warning"
                        style="font-weight: 600; text-decoration: none"
                        >Login</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>

    <!-- Bootstrap JavaScript Libraries -->
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
      integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
      crossorigin="anonymous"
    ></script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
      integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
      crossorigin="anonymous"
    ></script>
                  
        `;
    },

    async afterRender() {

    }
}

export default Daftar;