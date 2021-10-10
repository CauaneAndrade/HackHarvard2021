import React, { useEffect, useRef } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import './assets/scss/style.scss';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
// Views 
import Home from './views/Home';

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className='main'>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )} />
    </div>
  );
}

export default App;