function User(props){
    let {user}=props;
    return(
        <div className="text-center p-5 shadow-2xl rounded-2xl shadow-gray-500">
            <h2 className="text-3xl text-red-700">{user.name}</h2>
            <p className="font-bold mt-5 text-blue-800">{user.email}</p>
            <img src={user.image} alt="" className="block mx-auto rounded-3xl mt-5"/>
        </div>
    )
}

export default User;