import React from 'react'
import NotFoundImg from '../assets/page-not-found-jedi.gif'

function PageNotFound() {
    return (
        <div className="page-not-found">
            <div>
                <span>404</span>
                <img src={NotFoundImg} alt="obi-wan sliding broken link by using the force" />
            </div>
            <h1>This is not the page you are looking for.</h1>
        </div>
    )

}

export default PageNotFound
