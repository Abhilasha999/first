import TestimonialSlider from "../carousel/TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="testimonials">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Testimonials</h5>
                <h2 className="title">What Our Customers Say</h2>
                <p>
                  245m+ happy clients all around the world. Don’t just take our
                  word for it
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          {/* TODO: Testimonial Slider */}
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
