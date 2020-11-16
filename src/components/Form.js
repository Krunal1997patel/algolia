import React, { useState, useEffect } from 'react'


const Forms = () =>{

    return(
        <div>
            <h1>Algoila Address Autocomplete Demo</h1>
            <div>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="form-address">Address: </label>
                    <input type="text" className="form-control" id="form-address" />
                </div>

                <div className="form-group">
                    <label htmlFor="form-state" className='move'>State: </label>
                    <input type="text" className="form-control" id="form-state" />
                </div>

                <div className="form-group">
                    <label htmlFor="form-city" className='move'>City: </label>
                    <input type="text" className="form-control" id="form-city" />
                </div>

                <div className="form-group">
                    <label htmlFor="form-zip">ZIP code: </label>
                    <input type="text" className="form-control" id="form-zip" />
                </div>
            </form>
            </div>
        </div>
    )
}

export default Forms;