import React, { Component } from 'react';
import Link from 'next/link';
import Row from '../components/Row';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  render() {
    return (
      <Row className="">
        <div className="flex-center vh-50">
          <h1 className="f-headline ttu">
            {this.state.toggle && (
              <span
                className="underline"
                onClick={() => {
                  this.setState({
                    toggle: !this.state.toggle,
                  });
                }}
              >
                Black<span className="bg-black pr2 white">out</span>
              </span>
            )}
            {!this.state.toggle && (
              <span
                onClick={() => {
                  this.setState({
                    toggle: !this.state.toggle,
                  });
                }}
              >
                <span className="">
                  Hva <span className="bg-white black">skjedde?</span>
                </span>
              </span>
            )}
          </h1>
        </div>
      </Row>
    );
  }
}

export default Index;
