// Core imports
import React from 'react'
// Default exports of main functional component
export default function Right({information,setInformation}) {
    // JSX
    return (
        <div 
                className="right-section">
                    <div 
                    className="field-label field-label-blank field-label-min-width-60 display-block">
							&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div 
                    className="field-label-5 text-center display-block bottom-border left-border">
							Distributor Tracking Number 
					</div>
                    <div 
                    className="field-label field-label-blank field-label-min-width-60 display-block">
							&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div 
                    className="field-label-6 text-center display-block bottom-border left-border">
                            <input 
                            className="form-input width-100 border-none" 
                            type="text" 
                            value={information.DTN}
                            title="Manufacturer" 
                            data-field-name="Manufacturer" 
                            onChange={(e)=>{
                                const data={...information,DTN:e.target.value}
                                setInformation(data)
                            }}/>
					</div>
                    <div 
                    className="form-td" 
                    style={{height: "35px"}}>
							
					</div>
                    <div 
                    className="form-td" 
                    style={{height: "35px"}}>
                        <div 
                        className="field-label-7 right-border">
								Email 
                            </div><div 
                            className="field-label-6 text-center " >
                                <input 
                                className="form-input width-100 border-none" 
                                type="text" 
                                value={information.salesPerson.email}
                                title="Manufacturer" 
                                data-field-name="Manufacturer" 
                                onChange={(e)=>{
                                    const data={...information}
                                    const sales={...data.salesPerson}
                                    sales.email=e.target.value
                                    data.salesPerson=sales
                                    setInformation(data)
                                }}/>
						</div>	
					</div>
                    <div 
                    className="form-td" 
                    style={{height: "35px"}}>
                        <div 
                        className="field-label-7 right-border">
								Email 
                            </div>
                            <div 
                            className="field-label-6 text-center " >
                                <input 
                                className="form-input width-100 border-none" 
                                type="text" 
                                value={information.FAE.email} 
                                title="Manufacturer" 
                                data-field-name="Manufacturer" 
                                onChange={(e)=>{
                                    const data={...information}
                                    const fae={...data.FAE}
                                    fae.email=e.target.value
                                    data.FAE=fae
                                    setInformation(data)
                                }}/>
						</div>	
					</div>
				</div>
    )
}
