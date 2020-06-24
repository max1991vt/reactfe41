import React, { Component } from 'react'

export default class ExState2 extends Component {
    state = {
        urlImg: `./img/CarBasic/products/black-car.jpg`
    }
    //Định nghĩa hàm xử lý
    changeColor = (color) => {
//Từ tham số tạo ra đường dẫn đến hình ảnh mới tương ứng
let newUrlImg = `./img/CarBasic/products/${color}-car.jpg`;
this.setState({
    urlImg : newUrlImg
})
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={this.state.urlImg} alt="" style={{ width: '100%' }} />

                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-4">
                                    <button className="btn" style={{ background: 'red' }} onClick={() => {
                                        this.changeColor('red');
                                    }} >Red color</button>
                                </div>
                                <div className="col-4">
                                    <button className="btn" style={{ background: 'silver' }} onClick={() => {
                                        this.changeColor('silver');
                                    }}>Silver color</button>
                                </div>
                                <div className="col-4">
                                    <button className="btn" style={{ background: 'black' }} onClick={() => {
                                        this.changeColor('black');
                                    }}>Black color</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
