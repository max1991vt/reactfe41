import React, { Component } from 'react'
import BTProductComponent from './BTProductComponent'

export default class BTProductList extends Component {
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <BTProductComponent/>
                </section>


            </div>
        )
    }
}
