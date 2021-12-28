import React from "react";
import { Link } from "gatsby";
import Helmet from 'react-helmet'

import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <SEO />
    <Helmet>
    <script src="https://kit.fontawesome.com/c9c8324b05.js" crossorigin="anonymous"></script>
    </Helmet>
    <h1 className="title has-text-centered">Caio Cavalcanti</h1>
    <h2 className="subtitle has-text-centered">Web Developer</h2>

    <div className=" has-text-centered">
      <a href="https://github.com/" aria-label="GitHub">
        <span classname="icon is-large">
          <i class="fab fa-2x fa-github"></i>
        </span>
      </a>
    </div>

    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title">Hello, I am Caio Cavalcanti!</h4>
      <p>
        {`I'm a Web Developer, I work with Back-end building and maintains the technology needed
         to power the components which enable the user-facing side of the website to exist.`}
      </p>
      <p>Currently I study JavaScript, NodeJS and Python.</p>

      <p>
        Check out my {' '}
        <Link to="/projects">projects</Link>
        
      </p>
    </section>
  </Layout>
);

export default Home;
