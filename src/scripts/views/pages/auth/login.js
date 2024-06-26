const Login = {
    async render() {
        return `
    <section class="login-bg vh-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-5">
            <div
              class="card text-black"
              style="
                border-radius: 25px;
                background-color: rgba(255, 255, 255, 0.9) !important;
                box-shadow: 0px 4px 6px 3px rgba(0, 0, 0, 0.25) !important;
              "
            >
              <div class="card-body">
                <div class="row justify-content-center p-4">
                  <p class="text-center h1 fw-bold mb-4 mx-1 mx-md-3 mt-3">
                    Masuk
                  </p>
                  <form class="mx-1 mx-md-4" action="add.php" method="post">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c"
                          ><i class="bi bi-person-circle"></i> Username</label
                        >
                        <input
                          type="text"
                          id="form3Example1c"
                          class="form-control form-control-lg py-3"
                          name="name"
                          autocomplete="off"
                          placeholder="Masukan nama pengguna anda"
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
                          type="password"
                          id="form3Example4c"
                          class="form-control form-control-lg py-3"
                          name="password"
                          autocomplete="off"
                          placeholder="Masukan kata sandi anda"
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
                        value="Login"
                        name="register"
                        class="btn btn-primary btn-lg text-light my-2 py-3"
                        style="
                          width: 100%;
                          border-radius: 30px;
                          font-weight: 600;
                          background-color: #004080;
                        "
                        style="
                          border-radius: 25px;
                          background-color: rgba(255, 255, 255, 0.3);
                        "
                      />
                    </div>
                  </form>
                  <p align="center">
                    Belum punya akun?
                    <a
                      href="#/daftar"
                      class="text-warning"
                      style="font-weight: 600; text-decoration: none"
                    >
                      <b>Daftar</b>
                    </a>
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

export default Login;