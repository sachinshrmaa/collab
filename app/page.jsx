import Link from "next/link";

const Home = () => {
  return (
    <div>
      <section className="py-5 hero-section">
        <div className="col-9 m-auto py-5">
          <h1 className="mb-4 heading-hero">
            Innovate. Elevate. Dominate. <br /> Unlock your digital potential.
          </h1>
          <p className="mb-5 para-hero">
            Transform your business with cutting-edge web development <br />
            and powerful branding solutions.
          </p>
          <a className="btn btn-primary px-4" href="#services">
            Explore services
          </a>
          <Link className="btn btn-outline-primary px-4 mx-3" href='/about'>
            Learn more →
          </Link>
        </div>
      </section>

      <section className="services py-5 " id="services">
        <div className="col-9 m-auto">
          <h1 className="text-center mb-3 heading">Services</h1>
          <p className="text-center mb-4">
            Excellence in Web. Brilliance in Branding.
          </p>

          <div class="row py-3">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Web Development</h5>
                  <p class="card-text">
                    Crafting immersive digital experiences that bring your
                    vision to life, one line of code at a time.
                  </p>
                  <a href="/contact" class="btn btn-primary">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Business Branding</h5>
                  <p class="card-text">
                    Unleash the power of your brand with captivating designs and
                    strategic storytelling that resonates with your audience.
                  </p>
                  <a href="/contact" class="btn btn-primary">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
