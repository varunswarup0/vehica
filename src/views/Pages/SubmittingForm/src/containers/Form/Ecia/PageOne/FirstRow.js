// Core imports
import React from 'react'
// Default export of main functional component
export default function FirstRow({information,setInformation}) {
    // JSX
    return (
        <div 
            className="form-row">
                <div 
                className="form-td">
                    <div 
                    className="field-label right-border">
						Manufacturer
					</div>
                    <div 
                    className="field-input right-border">
                        <input 
                        className="form-input width-155" 
                        type="text" 
                        value={information.name}
                        title="Manufacturer" 
                        data-field-name="Manufacturer" 
                        onChange={(e)=>{
                            const data={...information,name:e.target.value}
                            setInformation(data)
                        }}/>
					</div>
                    <div 
                    className="field-label right-border">
						Submitted By
					</div>
                    <div 
                    className="field-input right-border">
                        <input 
                        className="form-input width-176" 
                        type="text" 
                        value={information.submittedBy} 
                        title="Manufacturer" 
                        data-field-name="Manufacturer" 
                        onChange={(e)=>{
                            const data={...information,submittedBy:e.target.value}
                            setInformation(data)
                        }}/>
					</div>
                    <div 
                    className="field-label right-border">
						Email
					</div>
                    <div 
                    className="field-input">
                        <input 
                        className="form-input width-255" 
                        type="text" 
                        value={information.email}
                        title="Manufacturer" 
                        data-field-name="Manufacturer" 
                        onChange={(e)=>{
                            const data={...information,email:e.target.value}
                            setInformation(data)
                        }}/>
					</div>
				</div>
                <div 
                className="form-td last-td">
                    <div 
                    className="field-label-3 right-border width-81">
						Date Submitted 
					</div>
                    <div 
                    className="field-input right-border">
                        <input 
                        className="form-input width-155" 
                        type="text" 
                        value={information.dateSubmitted}
                        title="Manufacturer" 
                        data-field-name="Manufacturer" 
                        onChange={(e)=>{
                            const data={...information,dateSubmitted:e.target.value}
                            setInformation(data)
                        }}/>
					</div>
                    <div 
                    className="field-label-3 right-border">
						Product Liability Concern 
					</div>
                    <div 
                    className="field-label right-border">
						Yes
					</div>
                    <div 
                    className="field-label-2 right-border div-checkbox">
                        <label 
                        className="chk-container">
                          <input 
                          type="checkbox" 
                          checked={information.PLC!==null && information.PLC?true:false}
                          onChange={(e)=>{
                            const data={...information,PLC:e.target.checked?true:null}
                            setInformation(data)
                        }}/>
                          <span 
                          className="checkmark"></span>
						</label>
					</div>
                    <div 
                    className="field-label right-border">
						No
					</div>
                    <div 
                    className="field-label-2 right-border div-checkbox">
                        <label 
                        className="chk-container">
                          <input 
                          type="checkbox" 
                          checked={information.PLC!==null?information.PLC?false:true:false}
                          onChange={(e)=>{
                            const data={...information,PLC:e.target.checked?false:null}
                            setInformation(data)
                        }}/>
                          <span 
                          className="checkmark"></span>
						</label>
					</div>
                    <div 
                    className="field-label right-border">
						Joint Visit Date 
					</div>
                    <div 
                    className="field-input">
                        <input 
                        className="form-input width-242" 
                        type="text" 
                        value={information.jointVisitDate}
                        title="Manufacturer" 
                        data-field-name="Manufacturer" 
                        checked={information.PLC!==null && information.PLC?true:false}
                          onChange={(e)=>{
                            const data={...information,jointVisitDate:e.target.value}
                            setInformation(data)
                        }}/>
					</div>
				</div>
			</div>
    )
}
