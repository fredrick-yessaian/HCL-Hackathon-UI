
import React from 'react'

//common Component for both customer and chef/staff
function Customer(props) {
    // const [viewDetails, setViewDetails] = useState(0)
    // function openModal() {
    //     setViewDetails(viewDetails)
    // }
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
                                                <button type="button" className="btn btn-primary" onClick={(e)=>props.openModal(e)} data-toggle="modal" data-target="#exampleModal">
                                                Order Details
</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {
                    props.viewDetails && <div className={`modal ${props.viewDetails ? 'show' : 'fade'}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!props.viewDetails} style={props.viewDetails ? {display:'block'} : {display:'none'}}>
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Order Details</h5>
                        </div>
                        <div className="modal-body">
                        <h6>Order Details can be shown here.</h6>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={(e)=>props.openModal(e)}>Close</button>
                          {props.viewType === 'Staff' && <button type="button" className="btn btn-primary">Update Status</button>}
                        </div>
                      </div>
                    </div>
                  </div>
                }
            </div>

        </React.Fragment>
    )
}

export default Customer
