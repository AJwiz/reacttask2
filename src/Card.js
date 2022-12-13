function Card({ arr, fun, passit }) {
  return (
    <div class="col md-5">
      <div class="card">
        {/* <!-- Sale badge--> */}
        <div class="badge bg-dark text-white position-absolute">
          {arr.sale ? "Sale" : ""}
        </div>
        {/* <!-- Product image--> */}
        <img
          class="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="DummyImage"
        />
        {/* <!-- Product details--> */}
        <div class="card-body p-4">
          <div class="text-center">
            {/* <!-- Product name--> */}
            <h5 class="fw-bolder">{arr.prodtname}</h5>
            {/* <!-- Product reviews--> */}
            <div class="d-flex justify-content-center small text-warning mb-2">
              <div class="bi-star-fill">
                {arr.star ? "⭐" : <div>&nbsp;</div>}
              </div>
              <div class="bi-star-fill">
                {arr.star ? "⭐" : <div>&nbsp;</div>}
              </div>
              <div class="bi-star-fill">
                {arr.star ? "⭐" : <div>&nbsp;</div>}
              </div>
              <div class="bi-star-fill">
                {arr.star ? "⭐" : <div>&nbsp;</div>}
              </div>
              <div class="bi-star-fill">
                {arr.star ? "⭐" : <div>&nbsp;</div>}
              </div>
            </div>
            {/* <!-- Product price--> */}
            <span class="text-muted text-decoration-line-through">
              {arr.txtprop}
            </span>
            &nbsp;{arr.usdrange}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <button
              // disabled={passit.some((item) => item.id === arr.id)}
              onClick={() => fun(arr)}
              class="btn btn-outline-dark mt-auto"
            >
              {arr.btnname}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
