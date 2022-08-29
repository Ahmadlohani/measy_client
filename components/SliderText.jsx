import React from 'react'
import {AimOutlined} from "@ant-design/icons";

const SliderText = () => {
    return (
        <div>
            <div className="row bg-dark" style={{"opacity": "0.7"}}>
            <div className="col-lg-2 col-md-2 col-sm-2 text-center" id='timer'>
            <button className='btn btn-lg btn-light mx-2 my-2'><h1>30</h1>Days</button>
            <button className='btn btn-lg btn-light mx-2 my-2'><h1>21</h1> Hours</button>
            </div>
            <div className="col-md-5 my-3">
            <h3 className='text-light'>Born Primitive Rodent Trail Series: Day & Night</h3>
            <div className="date-map text-white">
                <span><AimOutlined className='text-light mx-auto h5' /> South Desert of Kuwait </span>
                <span className="mx-3">Feb 04 2022,03:00 PM</span><br />
                <button className='btn btn-sm btn-outline-light'>See More</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default SliderText
