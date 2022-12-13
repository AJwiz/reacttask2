export default function Cartbag({ each, dele }) {
    return (
        <div className="cart-bag">
            <div class="bill-card fw-bolder text-decoration-underline">List of Products In Bag</div>
            <ol class="list-group list-group-numbered">
                {each.map((oneprdt) =>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 auto">
                            <div class="fw-bold">{oneprdt.prodtname}</div>
                            <div>${oneprdt.price}</div>
                        </div>
                        <button onClick={() => dele(oneprdt)} class="badge bg-primary rounded-pill">X</button>
                    </li>
                )}
            </ol>

        </div >

    );
}