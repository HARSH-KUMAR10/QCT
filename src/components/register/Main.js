function Main() {
  return (
    <div className="container mt-5">
      <div className="mx-4">
        <div className="" style={{ fontSize: 35 }}>
          Registration
        </div>
        <div className="my-2" style={{ fontSize: 20 }}>
          Please complete the following Registration Form
        </div>
        <hr
          style={{ height: 3, backgroundColor: "#d10000", color: "#d10000" }}
        />

        <div className="d-flex justify-content-between">
          <div style={{ fontSize: 25 }}>Program Details</div>
          <div>
            <span style={{ color: "red" }}>*</span> mandatory fields
          </div>
        </div>
        <div className="row pt-5 pb-3">
          <div className="col-5">
            Selected Program <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 border">
            <input
              type="text"
              className="border-0 p-2"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="row py-3">
          <div className="col-5 pe-4">
            Please select which certification program you facility is applying
            for : <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 d-flex justify-content-between align-items-center">
            <div>
              <input
                type="radio"
                name="certification_program"
                className="border-0 p-2 mx-2"
                style={{ width: 20, height: 20 }}
              />{" "}
              Primary Stroke Centre
            </div>
            <div>
              <input
                type="radio"
                name="certification_program"
                className="border-0 p-2 mx-2"
                style={{ width: 20, height:20 }}
              />{" "}
              Comprehensive Stroke Centre
            </div>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-5">
            Number of Licensed Beds <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 border">
            <input
              type="text"
              className="border-0 p-2"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-5">
            Total Number of Annual Stroke Discharge:{" "}
            <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 border">
            <input
              type="text"
              className="border-0 p-2"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-5">
            Stroke Discharge by Type: <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 row ">
            <div className="col-6 py-2 row align-items-baseline">
              <div className="col-8" style={{fontSize:16}}>Ischemic</div>
              <div className="col-4 border">
                <input
                  type="text"
                  className="border-0 p-2"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-6 py-2 row align-items-baseline">
              <div className="col-8" style={{fontSize:16}}>ICH</div>
              <div className="col-4 border">
                <input
                  type="text"
                  className="border-0 p-2"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-6 py-2 row align-items-baseline">
              <div className="col-8" style={{fontSize:16}}>SAH</div>
              <div className="col-4 border">
                <input
                  type="text"
                  className="border-0 p-2"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-6 py-2 row align-items-baseline">
              <div className="col-8" style={{fontSize:14}}>Transient Ischemic Attack</div>
              <div className="col-4 border">
                <input
                  type="text"
                  className="border-0 p-2"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-5">
            Stroke Services Provided{" "}
            <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 row " >
            <div className="col-4">
            <input
              type="checkbox"
              className="border-0 p-2"
              style={{width:20, height:20}}
            /> Thrombolytics
            </div>
            <div className="col-8">
            <input
              type="checkbox"
              className="border-0 p-2"
              style={{width:20, height:20}}
            /> Mechamical Thrombectomy
            </div>
            <div className="col-5">
            <input
              type="checkbox"
              className="border-0 p-2"
              style={{width:20, height:20}}
            /> Stroke Rehabilitation services
            </div>

          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-5 pe-4">
            Teaching Status <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 d-flex justify-content-between align-items-baseline">
            <div>
              <input
                type="radio"
                name="teaching_status"
                className="border-0 p-2"
                style={{ width: 20, height: 20 }}
              />{" "}
              Teaching
            </div>
            <div>
              <input
                type="radio"
                name="teaching_status"
                className="border-0 p-2"
                style={{ width: 20, height: 20 }}
              />{" "}
              Non-Teaching
            </div>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-5 pe-4">
            Is your facility using a registry?  <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 d-flex align-items-baseline">
            <div className="me-3">
              <input
                type="radio"
                name="teaching_status"
                className="border-0 p-2"
                style={{ width: 20, height: 20 }}
              />{" "}
              Yes
            </div>
            <div>
              <input
                type="radio"
                name="teaching_status"
                className="border-0 p-2"
                style={{ width: 20, height: 20 }}
              />{" "}
              No
            </div>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-5 pe-4">
            If yes ? Please select the registry name  <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 border">
            <select className=" border-0 p-2" style={{width:'100%'}}>
                <option>Select</option>
            </select>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-5 pe-4">
            Link your site to a corporate parent account? <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 d-flex align-items-baseline">
            <div className="me-3">
              <input
                type="radio"
                name="teaching_status"
                className="border-0 p-2"
                style={{ width: 20, height: 20 }}
              />{" "}
              Yes
            </div>
            <div>
              <input
                type="radio"
                name="teaching_status"
                className="border-0 p-2"
                style={{ width: 20, height: 20 }}
              />{" "}
              No
            </div>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-5 pe-4">
            If yes ? Please select the Corporation  <span style={{ color: "red" }}>*</span>
          </div>
          <div className="col-7 border">
            <select className=" border-0 p-2 " style={{width:'100%'}}>
                <option>Select</option>
            </select>
          </div>
        </div>

        <div className="row py-3 align-items-center">
          <div className="col-5 pe-4">
          </div>
          <div className="col-7 border p-4" style={{backgroundColor:"#eee"}}>
            <input type="checkbox" style={{width:20, height:20}}/> I authorize this registry to submit the required data on the hospitals behalf
          </div>
        </div>
        <hr/>

        <div className="row py-3 align-items-center">
          <div className="col-5 pe-4">
          </div>
          <div className="col-4 d-flex justify-content-between p-2">
            <button className="btn py-1 px-5" style={{borderRadius:23,fontSize:18,borderColor:"#d10000",color:'#d10000'}}>Back</button>
            <button className="btn py-1 px-5" style={{borderRadius:23,fontSize:18,backgroundColor:"#d10000",color:'#eee'}}>Continue</button>
          </div>
          <div className="col-3 pe-4"></div>
        </div>

      </div>
    </div>
  );
}

export default Main;
