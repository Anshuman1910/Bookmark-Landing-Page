const Card=({image,title,version})=>{
 return(
    <div className="bg-white rounded-xl shadow-md text-center p-6 w-full max-w-xs mx-auto">
         <img src={image} alt="card-logo" className="mx-auto h-16 mb-6"></img>
         <h3 className="font-sans font-bold text-xl mb-2 ">{title}</h3>
        
         <p className="txet-slate-400 mt-4 mb-6 font-normal">Minimum version{version}</p>
         <div className="border-b border-gray-300 border-dotted my-8"></div>
         
        
         <button className="font-sans bg-blue-500 text-white px-4 py-2 rounded-md hover:text-blue-500 hover:bg-white space-x-2">Add & Install Extension</button>
         </div>

 )
}

export default Card;