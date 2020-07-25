
import React from 'react'

function customer(props) {
    return (
        <React.Fragment>
            <h4 className='text-center'>{props.viewType} View</h4>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            {
                                props.orderData && props.orderData.length > 0 && props.orderData.map((item, key) => {
                                    return (
                                        <div className="col-md-3 card mr-10 mb-5 ml-10" key={key}>
                                            <div className="card-body">
                                                <h5 className="card-title">Order ID:&nbsp;{item.id}</h5>
                                                <p className="card-text">Current Status:&nbsp;{item.username}</p>
                                                <a href="#" className="btn btn-primary">Go to Order Details</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default customer
