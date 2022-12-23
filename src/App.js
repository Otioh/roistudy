import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
     Roicomsat

     <section class="section coming-soon" data-section="section3">

     <div className="right-content">
            <div className="top-content">
              <h6>Register your free account and <em>get immediate</em> access to online courses</h6>
            </div>
            <form id="contact" action="" method="get">
              <div className="row">
                <div className="col-md-12">
                  <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required=""/>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required=""/>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <input name="phone-number" type="text" className="form-control" id="phone-number" placeholder="Your Phone Number" required=""/>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">Get it now</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>

</section>
     <button className='button'>
      Click Me
     </button>
    </div>
  );
}

export default App;
