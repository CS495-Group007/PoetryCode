import React, { Component } from "react";
import '../Styling/Login.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div class=".container">
                    <figure class="text-center">
                        <h1>Simply Scansion</h1>
                        <h3>What is Scansion?</h3>
                        <blockquote class ="blockquote">
                            <p>"the action of scanning a line of verse to determine its rhythm"</p>
                        </blockquote>
                    </figure>
                </div>
                <div class=".container">
                    <figure class="text-center">
                        <div class="d-grid gap-2">
                            <div class="p-2"><a class="btn btn-dark btn-lg" href="/sign-in" role="button">Sign In</a></div>
                            <div class="p-2"><a class="btn btn-dark btn-lg" href="/sign-up" role="button">Sign Up</a></div>
                            <div class="p-2"><a class="btn btn-dark btn-lg" href="/simply-scansion" role="button">Proceed as Guest</a></div>
                        </div>
                    </figure>
                </div>
                <div class=".container">
                    <h3><a id="/how-to">How To Play?</a></h3>
                    <ol>
                        <li>Sign In or Proceed as Guest</li>
                        <li>Select the poem you want to scan</li>
                        <li>The gameboard will populate with the number of lines in the poem selected</li>
                        <li>Use the game pieces at the bottom of the page to assign the five sets of syllables to each line</li>
                        <li>Once completed, hit submit to check your work!</li>
                    </ol>
                    <p>You can complete the poems as many times as necessary to learn the skill of scansion!</p>
                    <h4 class="text-center">What Do All the Colors Mean?</h4>
                    <ul>
                        <li>Yellow - Iamb</li>
                        <li>Blue - Trochee</li>
                        <li>Red - Dactyl</li>
                        <li>Grey - Anapest</li>
                        <li>Black - Spondee</li>
                        <li>Green - Pyrrhic</li>
                    </ul>
                </div>                
            </div>
        );
    }
}