import React from "react";
import Footer from "./components/layout/footer/footer";
import About from "./components/layout/main/about/about";
import ExampleSection from "./components/layout/main/exampleSection/exampleSection";
import FormSection from "./components/layout/main/formSection/formSection";
import { GlobalStyle } from "./style";
import products from "./moke";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout/layout";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <React.Fragment>
          <GlobalStyle></GlobalStyle>
          <div className="App">            
            <Route
              path="/"
              exact
              render={(routeProps) => (
                <Layout pathName={routeProps.location.pathname}>
                  <About></About>
                  <ExampleSection></ExampleSection>
                </Layout>
              )}
              >
            </Route>            
            <Route
                path="/catalog"
                exact
                render={(routeProps) => (
                    <Layout pathName={routeProps.location.pathname}>
                      <FormSection products={products}></FormSection>  
                    </Layout>   
                )}
                >               
            </Route>
            <Footer></Footer>
          </div>
        </React.Fragment>
      </Switch>
    </BrowserRouter>

  );
}

export default App;