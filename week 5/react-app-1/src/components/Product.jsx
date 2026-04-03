function Product(props){//props(Or any other name-holding parameter) receives data from it's parent component
    const {productObj}=props
    //State
    //Return a react element
    return(
        <div className="p-9 shadow-2xl shadow-red-200 bg-pink-100 border-l-red-200 border-r-red-200">
            <div className="text-2xl text-red-400">
        <h2 className="text-2xl"> {productObj.title}</h2>
        <p className="font-bold"> {productObj.price}</p>
        <p className="font-bold"> {productObj.description}</p>
        </div>
        </div>
    )
}

export default Product;