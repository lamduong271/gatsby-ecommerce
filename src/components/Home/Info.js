import React, { Component } from "react"
import { Link } from "gatsby"
import Title from '../Globals/Title'
export class Info extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
        <Title title="Our story"></Title>
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad facilis provident soluta molestias non dolorem necessitatibus, deleniti autem fuga facere quod tempora harum dolorum aliquid minima ipsam aliquam, doloribus quaerat.
              </p>
              <Link to="/about/">
              
              <button className="btn text-uppercase btn-yellow">
              About page
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Info
