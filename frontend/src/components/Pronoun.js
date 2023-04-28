import React, { Component } from 'react';

export default function Pronoun() {

    const pronounsEng = ['ene', 'esu', 'eswa', 'enese', 'egena']
    const pronounsAmh = ['እ', 'እ', 'እ', 'እ', 'eእ']

    const [Count, setCount]  = React.useState(pronounsEng)

        return (
            <>
            <div class="card mx-auto page-wrap bg-warning style=width:19rem;">
             <img src="/frontend/static/images/I.png" class="card-img-top" alt="..."/>
             <div class="card-body">
             <h5 class="card-title">I--</h5>
        
             <p class="card-text">{Count}</p>
            <a href="#" onClick = {() => {alert('hithere')}} class="btn btn-primary">Next</a>
            

            </div>
            </div>
        </>
        
        );
}