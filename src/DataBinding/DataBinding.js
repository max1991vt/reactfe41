import React, { Component } from 'react'

export default class DataBinding extends Component {

    hocVien = {
        ma: 1,
        hoTen: 'Nguyễn Văn A',
        hinhAnh: 'https://picsum.photos/536/354'
    }
    //Phương thức renderImg do mình tạo ra
    renderImg() {
        return <img src="https://picsum.photos/536/354" alt="123" />
    }
    //Phương thức của React component
    render() {
        let title = 'hello fe 41';
        return (
            <div>
                <div className="container">
                    <div class="card text-left">
                        <img width="{100}" height="{100}" className="card-img-top" src={this.hocVien.hinhAnh} alt />

                            <div class="card-body">
                                <h4 class="card-title">{this.hocVien.hoTen}</h4>
                            </div>
                    </div>
                    </div>
                    <h1>{title}</h1>
                    <input value={title}></input>
                    {this.renderImg()}
                </div>
            
            
        )
    }
}
