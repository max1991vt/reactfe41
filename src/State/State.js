import React, { Component } from 'react'

export default class State extends Component {
    // Nếu như isLogin = true là người đã đăng nhập => Hiển thị thông tin xin chào userName
    // Ngược lại isLogin = false 
    userName = 'Huy';
    //State là 1 thuộc tính của component ==> Khi state thay đổi giá trị giao diện render lại
    //Lưu ý: Các giá trị làm thay đổi giao diện thì đạt trong state
    state ={
        isLogin : false
    }
    

renderLogin = ()=>{
    if (this.state.isLogin){
    return <button className="nav-link">Hello {this.userName}</button>
    }
    return<button className="nav-link" onClick ={()=>{
this.login();
    }} >Dăng nhập</button>
}
login =()=>{
    // this.state.isLogin =true;  Khong được gán giá trị cho thuộc tính state trực tiếp
    //this.setState(newState): Phương thức của Component thay đỏi giá trị state hiện tại và render lại giao diện
    this.setState({
        isLogin :true
    }, () => {
        //Call back thực hiện sau khi state mang giá trị mới
        console.log(this.state.isLogin);
    })
    
    
}

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                    <a className="navbar-brand" href="#">CYBERSOFT</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                {this.renderLogin()}
                            </li>
                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}
