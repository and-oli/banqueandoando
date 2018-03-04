import React from 'react';
import WrappedNormalLoginForm from './Login';
import ToolForm from './ToolForm';


class Header extends React.Component {
  render() {
    return (
      <header id="nino-header" style={{height: '100vh'}}>
        <div id="nino-headerInner">

          <nav id="nino-navbar" className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="homepage.html">Banqueando</a>
              </div>
            </div>
          </nav>

          <section id="nino-slider" className="carousel slide container" data-ride="carousel" data-interval="false">
            <ol className="carousel-indicators clearfix">
              <li data-target="#nino-slider" data-slide-to={0} className="active">
                <div className="inner">
                  <span className="number">01</span> Bienvenido
                </div>
              </li>
              <li data-target="#nino-slider" data-slide-to={1}>
                <div className="inner">
                  <span className="number">02</span> ¿Qué es esto?
                </div>
              </li>
              <li data-target="#nino-slider" data-slide-to={2}>
                <div className="inner">
                  <span className="number">03</span> Cuenta
                </div>
              </li>
              <li data-target="#nino-slider" data-slide-to={3}>
                <div className="inner">
                  <span className="number">04</span> Herramienta
                </div>
              </li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <h2 className="nino-sectionHeading" style={{fontSize: '7vw'}}>
                  <span className="nino-subHeading">Bienvenido a</span>
                  BANQUEANDO
                </h2>
                <a href="" className="nino-btn">Empezar</a>
              </div>
              <div className="item">
                <h2 className="nino-sectionHeading" style={{fontSize: '2vw !important', lineHeight: '1.4 !important'}}>
                  <span className="nino-subHeading">¿Qué es Banqueando?</span>
                  Banqueando permite a los consumidores financieros ver de forma muy clara y transparente la manera en que van a pagar un producto financiero (particularmente créditos) al que tienen la intención de acceder.                </h2>
                <a href="" className="nino-btn">Empezar</a>
              </div>
              <div className="item">
                <h2 className="nino-sectionHeading">
                  <span className="nino-subHeading" style={{marginBottom: '-10px !important'}}>¡Ingresa!</span>
                </h2>
                <WrappedNormalLoginForm  />
              </div>
              <div className="item">
                <h2 className="nino-sectionHeading" style={{fontSize: '7vw'}}>
                  <span className="nino-subHeading">Herramienta</span>
                </h2>
                <ToolForm  />
              </div>
            </div>
          </section>
        </div>
      </header>
    );
  }
}
export default Header;
