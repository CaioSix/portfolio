import React from 'react';
import SEO from "../components/SEO";

import Layout from '../components/Layout';



const Projects = () =>(
    <Layout>
        <SEO pageTitle="Projects | Caio Cavalcanti" />
        <section className="section is-size-4-desktop is-size-5-touch">
            <h1 className="title has-text-centered">Projects</h1>
            <hr />
            <p className="has-text-centered">
                Some of my projects, see more on my  {' '} 
                <a href="https://github.com/CaioSix">GitHub.
                </a>
            </p>

            <ul className="has-text-centered">
                <li>
                    <a href="https://github.com/CaioSix/Formul-rio-de-cadastro-e-uma-lista-de-notas.">
                        Note in React
                    </a>
                </li>
                <li>
                    <a href="https://pedroespinola.github.io/projeto-resiliaflix/.">
                        ResiliaFlix
                    </a>
                </li>
                <li>
                    <a href="http://caiocavalcanti.tk/.">
                        Tourism
                    </a>
                </li>

            </ul>
        </section>
    </Layout>

);



export default Projects;