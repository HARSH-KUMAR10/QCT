function Header(){
    return (
        <div className="border-bottom px-4">
        <div className="row justify-content-between align-items-baseline py-4 px-5">
            <div className="col-4">
            <img src="./assets/logo.JPG" alt="qct" style={{width:'80%'}}/>
            </div>
            <div className="col-4 d-flex justify-content-between">
                <div><button className="btn" style={{fontSize:18,color:"#333"}}>My Account</button></div>
                <div><button className="btn" style={{fontSize:18,color:"#333"}}>Volunteer</button></div>
                <div><button className="btn py-1 px-4" style={{borderRadius:23,fontSize:18,backgroundColor:"#d10000",color:'#eee'}}>Donate</button></div>
            </div>
        </div>
        </div>
    )
}

export default Header;