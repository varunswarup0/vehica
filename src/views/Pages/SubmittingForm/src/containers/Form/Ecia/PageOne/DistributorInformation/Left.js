// Core imports
import React from 'react'
// Default exports of main functional component
export default function Left({information,setInformation}) {
    // JSX
    return (
        <div 
                className="left-section right-border">
                    <div 
                    className="row-title  form-th">
                        <h4 
                        className="bold text-center">Distributor Information </h4>
					</div>
                    <div 
                    className="form-td">
                        <div 
                        className="field-label right-border">
							Name
						</div>
                        <div 
                        className="field-input width-97">
                            <input 
                            className="form-input width-100" 
                            type="text" 
                            value={information.name} 
                            title="Manufacturer" 
                            data-field-name="Manufacturer" 
                            onChange={(e)=>{
                                const data={...information,name:e.target.value}
                                setInformation(data)
                            }}/>
						</div>
					</div>
                    <div 
                    className="form-td">
                        <div 
                        className="field-label-4 right-border">
							Branch Location (City, State)
						</div>
                        <div 
                        className="field-input width-66">
                            <input 
                            className="form-input width-100" 
                            type="text" 
                            value={information.branchLocation}
                            title="Manufacturer" 
                            data-field-name="Manufacturer" 
                            onChange={(e)=>{
                                const data={...information,branchLocation:e.target.value}
                                setInformation(data)
                            }}/>
						</div>
					</div>
                    <div 
                    className="form-td">
                        <div 
                        className="field-label right-border">
							Salesperson 
						</div>
                        <div 
                        className="field-input right-border width-235">
                            <input 
                            className="form-input width-100" 
                            type="text" 
                            value={information.salesPerson.name}
                            title="Manufacturer" 
                            data-field-name="Manufacturer" 
                            onChange={(e)=>{
                                const data={...information}
                                const sales={...data.salesPerson}
                                sales.name=e.target.value
                                data.salesPerson=sales
                                setInformation(data)
                            }}/>
						</div>
						<div className="field-label right-border">
							Phone 
						</div>
						<div className="field-input">
                            <input 
                            className="form-input width-100" 
                            type="text" 
                            value={information.salesPerson.phone}
                            title="Manufacturer" 
                            data-field-name="Manufacturer" 
                            onChange={(e)=>{
                                const data={...information}
                                const sales={...data.salesPerson}
                                sales.phone=e.target.value
                                data.salesPerson=sales
                                setInformation(data)
                            }}/>
						</div>					
					</div>
                    <div 
                    className="form-td">
                        <div 
                        className="field-label field-label-min-width right-border">
							FAE 
						</div>
                        <div 
                        className="field-input right-border width-235">
                            <input 
                            className="form-input width-100" 
                            type="text" 
                            value={information.FAE.name} 
                            title="Manufacturer" 
                            data-field-name="Manufacturer" 
                            onChange={(e)=>{
                                const data={...information}
                                const fae={...data.FAE}
                                fae.name=e.target.value
                                data.FAE=fae
                                setInformation(data)
                            }}/>
						</div>
                        <div 
                        className="field-label right-border">
							Phone 
						</div>
                        <div 
                        className="field-input">
                            <input 
                            className="form-input width-100" 
                            type="text" 
                            value={information.FAE.phone} 
                            title="Manufacturer" 
                            data-field-name="Manufacturer" 
                            onChange={(e)=>{
                                const data={...information}
                                const fae={...data.FAE}
                                fae.phone=e.target.value
                                data.FAE=fae
                                setInformation(data)
                            }}/>
						</div>					
					</div>
                </div>
    )
}
