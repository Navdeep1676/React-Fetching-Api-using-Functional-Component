import React from "react";
import Button from "./Button";
import Data from "./Data";

function Show(props) {
  return (
    <div className="container-fluid bg-dark p-5">
      <div className="row">
        <div className="col-12">
          <div className="data  border mx-auto w-50 text-center bg-warning p-5 m-5 rounded-pill">
            <div className='rounded-circle border border-4 p-1 my-2  d-inline-block border-info'>
              <img src={props.img} className='rounded-circle ' alt={props.name} />
            </div>
            <div className="tab-content my-4 " id="pills-tabContent">
                <Data class={'tab-pane fade show active'} id={'pills-name'} title={'Hi, My Name is'} data={props.name} />
                <Data class={'tab-pane fade show '} id={'pills-email'} title={'My Email is'} data={props.email} />
                <Data class={'tab-pane fade show '} id={'pills-age'} title={'My Age is'} data={props.age} />
                <Data class={'tab-pane fade show '} id={'pills-adress'} title={'My Address is'} data={props.city} />
                <Data class={'tab-pane fade show '} id={'pills-phone'} title={'My Phone is'} data={props.phone} />
                <Data class={'tab-pane fade show '} id={'pills-gender'} title={'My Gender is'} data={props.gender} />     
            </div>
            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
             <Button which={'Name'}    target={'#pills-name'} id={'pills-name-tab'}   class={'nav-link active'}/>
             <Button which={'Email'}    target={'#pills-email'} id={'pills-email-tab'}  class={'nav-link '}/>
             <Button which={'Age'}      target={'#pills-age'} id={'pills-age-tab'}  class={'nav-link '}/>
             <Button which={'Address'}  target={'#pills-adress'} id={'pills-adress-tab'}   class={'nav-link '}/>
             <Button which={'Phone'}    target={'#pills-phone'} id={'pills-phone-tab'}  class={'nav-link '}/>
             <Button which={'Gender'}   target={'#pills-gender'} id={'pills-gender-tab'}   class={'nav-link '}/>
            </ul>  
            <button type="button" className='btn btn-success d-block mx-auto' onClick={props.data}>Refresh</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
 