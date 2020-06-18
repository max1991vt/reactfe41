import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider'
import BTProductList from './BTProductList'
import BTFooterCoponent from './BTFooterCoponent'

export default class BaiTapDanLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader></BTHeader>
                <BTSlider/>
                <BTProductList/>
                <BTFooterCoponent/>
            </div>
        )
    }
}
