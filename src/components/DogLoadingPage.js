import React, { Component } from 'react'

class DogLoadingPage extends Component{

    render() {

        return (
          <section className="dogPosition">
              <div className="dog">
                  <div className="dog-body">
                    <div className="dog-tail">
                      <div className="dog-tail">
                        <div className="dog-tail">
                          <div className="dog-tail">
                            <div className="dog-tail">
                              <div className="dog-tail">
                                <div className="dog-tail">
                                  <div className="dog-tail"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dog-torso"></div>
                  <div className="dog-head">
                    <div className="dog-ears">
                      <div className="dog-ear"></div>
                      <div className="dog-ear"></div>
                    </div>
                    <div className="dog-eyes">
                      <div className="dog-eye"></div>
                      <div className="dog-eye"></div>
                    </div>
                    <div className="dog-muzzle">
                      <div className="dog-tongue"></div>
                    </div>
                  </div>
              </div>
              <h1 className="resultsTitle">Calculating results <p className="saving"><span>.</span><span>.</span><span>.</span></p></h1>
          </section>

        );
    }
};


export default DogLoadingPage
