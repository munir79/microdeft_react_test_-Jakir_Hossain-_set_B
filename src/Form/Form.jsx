


const Form = () => {
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.tittle.value;
        const stock=form.stock.value;
        const price=form.price.value;
        const discount=form.discount.value;
        const email=form.email.value;
        console.log(name,price,discount,stock,email)



    }
   
  
    return (
        
      
         
       
            <form onSubmit={handleSubmit} className="card-body">
              <div className="grid gap-2 grid-cols md:grid-cols-2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tittle</span>
                </label>
                <input type="email" name="tittle" placeholder="tittle" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">stock</span>
                </label>
                <input type="number" name="stock" placeholder="stock" className="input input-bordered" required />
               
              </div>
             
              </div>


              <div className="grid gap-2 grid-cols md:grid-cols-2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="number" name="price" placeholder="price" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Discount</span>
                </label>
                <input type="number" name="discount" placeholder="discount" className="input input-bordered" required />
               
              </div>
             
              </div>

          

              <div className="form-control">
                <label className="label">
                  <span className="label-text">email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>


              <div className="form-control mt-6">
              
                <button type="submit" className="btn btn-primary">Add Product</button>
              </div>
            </form>
        
        
     
    );
};

export default Form;