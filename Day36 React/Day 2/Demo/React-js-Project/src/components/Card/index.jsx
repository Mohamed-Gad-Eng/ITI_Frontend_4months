
export default function Card({product,handleDeleteProduct}) {
    
    return (
        <>
            <div className="col" key={product.id}>
                <div className="card">
                    <img src={product.thumbnail} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* conditional rendering */}
                        {(product.stock < 4) ? <span class="badge text-bg-warning">Stock is {product.stock}</span> : <span class="badge text-bg-success">Stock is {product.stock}</span>}
                        {/* {prd.stock<4 && <span class="badge text-bg-warning">Stock is {prd.stock}</span>} */}
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-danger" onClick={()=>{handleDeleteProduct(product.id)}}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
