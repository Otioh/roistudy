import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
     Roicomsat
<div className='row'>
<div className='col-sm-4'>

</div>
<div className='col-sm-4'>

     <section class="section coming-soon" data-section="section3">

     <div className="right-content">
            <div className="top-content">
              <h6>Login to access online courses</h6>
            </div>
            <form id="contact" action="" method="get">
              <div className="row">
                <div className="col-md-12">
                  <fieldset>
                    <input name="name" type="email" className="form-control" id="name" placeholder="E-Mail" required=""/>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <input name="phone-number" type="password" className="form-control" id="phone-number" placeholder="Password" required=""/>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">Login</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>

</section>
     </div>

<div className='col-sm-4'>

</div>

</div>

    </div>
  );
}

export default App;
