import React, { Component } from 'react'

export default class ExState1 extends Component {
    state = {
        like: 0 //Giá trị thay đổi giao diện mỗi lần người dùng thao tacsex được lưu trong state
    }
    //Hàm xử lý lượt like
    like = () => {
        let likeNumber = this.state.like + 1;
        //Dùng phương thức setState gán lại giá trị mới cho state => Giao diện tự động render lại
        this.setState({
            like: likeNumber
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="display-4">Profile Le Thi Trang</h3>
                <div class="card text-white bg-dark" style={{ width: 250 }}>
                    <img className="card-img-top" src="https://cdn.24h.com.vn/upload/1-2019/images/2019-03-02/1551517471-754-1-1551455774-width500height625.jpg" alt="123" style={{ width: 250, height: 300 }} />
                    <div className="card-body bg-dark">
                        <p className="card-title">Họ tên: Lê Thị Trang ({this.state.like} <i className="fa fa-heart"></i>)</p>
                        <p className="card-text">Tuổi: 18</p>
                    </div>
                </div>
                <div class="card text-white bg-default " style={{ width: 250 }}>
                    <div class="card-body text dark">
                        <h4 class="card-title">Lượt thích ({this.state.like} <i className="fa fa-heart"></i>)</h4>
                        <button onClick={() => {
                            this.like();
                        }} className="btn btn-default" style={{ color: 'red', border: '1px solid red' }}>
                            Thả tim<i className="fa fa-heart"></i>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}
