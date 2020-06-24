import React, { Component } from 'react'

export default class EventBinding extends Component {
    handelClick = (name) => {
        alert("Hello" + name)
    }



    render() {
        return (
            <div>
                event binding
                <br />
                {/* <button onClick={() => {
                alert("Hello FE41")
            }} id ="btnShowMessage" className= "btn btn-success">Show Massage</button>    */}
                {/* Cách 2 truyền callback function =>Khi click function đó được gọi */}
                {/* <button onClick={this.handelClick.bind(this,'Huy')} id="btnShowMessage" className="btn btn-success">Show Massage</button> */}

                {/* Cách 3: Định nghĩa function trực tiếp có tham số */}
                <button onClick={() => {
                    // Định nghĩa xử lý khi button click 
                    this.handelClick('Huy');
                }} id="btnShowMessage" className="btn btn-success">Show Massage</button>
            </div >
        )
    }
}
