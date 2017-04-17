import Navbar from '../components/Navbar';
import Logo from '../svgs/logo.svg';

const Index = props => {
  return (
    <div className="vh-100">
      <Navbar />
      <main>
        <article className="bg-white">
          <div
            className="vh-75 cover bg-center"
            style={{backgroundImage: 'url(/static/bg-spring.jpg)'}}
          >
            <div className="dt w-100 h-100">
              <div className="dtc v-mid tc">
                <h1 className="f-headline mw6 red">Saving lives like never before</h1>
              </div>
            </div>
          </div>

          <div className="ph4 ph5-m ph6-l">
            <div className="pv5 f4 f2-ns measure center">
              <h1 className="fw6 f1 fl w-100 black-70 mt0 mb3 avenir">
                Project Title #034
              </h1>
              <p
                className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville"
              >
                A short description of your project. Maybe a few notes concerning your
                constraints and process.  Standard lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore etc. al dolore magna
                aliqua. Ut enim ad.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Index;
