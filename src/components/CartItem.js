import React from 'react'
import './CartItem.css'


function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202003?wid=470&hei=556&fmt=png-alpha&.v=1583550102533" alt="" />
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>Apple iPad Pro</h2>
                </div>
                <div className="info-stock">
                    In Stock

                </div>
                <div className="item-actions">
                    <div className="item-quantity">

                    </div>
                    <div className="item-delete">
                        Delete
                    </div>

                </div>

            </div>
            <div className="CartItem-price">
                $769.00
            </div>

        </div>
    )
}

export default CartItem
