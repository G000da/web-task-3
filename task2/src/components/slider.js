function Slider(){
    return (
        <>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.proideators.com/wp-content/uploads/2021/07/How-To-Create-Business-Profile-For-Your-Ecommerce-Website-In-2021-ProiDeators.jpg" className="d-block w-100"  height="600" width="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://froth.africa/sites/za_lifeindigital/data/articles/what-is-ecommerce.article/imgs/0.png" className="d-block w-100" height="600" width="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" className="d-block w-100" height="600" width="500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
}
export default Slider;