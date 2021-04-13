/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React, { Component } from "react";
import '../Styling/Login.css';
import '../Styling/DashboardStyling.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/**
 * Component responsible for implementing the log in functionality.
 */
class Credit extends Component {
    render() {
        return (
            <div className = "outer">
                <div className = "dash-inner">
                    <Container>
                        <Row>
                            <Col>
                                <h3>ABOUT</h3>
                                <p>Iambic pentameter is the regular pattern of long and short syllables used, from the sixteenth century until today, by poets and playwrights working in English. Learning how to identify the six combinations of syllables that can make up a line of pentameter, called <i>scansion</i> is key. Poetry, since the <a href="https://hexameter.co/">classical period</a>, was meant to be heard. This game helps you learn, practice, and master the skill of scansion.</p>
                                <h4>&#10087; Overview</h4>
                                <p><i>Scansion</i> is an analytic process for mapping the metrical structure of a line of verse poetry. All poems can be broken into two categories: closed, with a strict structure in which the poet is working, such as a haiku or ghazal; and open, where no predetermined form is employed. A poem is scanned by marking its stressed and slack syllables and dividing them into feet. Over the years, many different systems have been established to mark the scansion of a poem; at its most basic, however, one notates long syllables with a <i>breve</i> ( — ) and short syllables with an <i>ictus</i> ( / ). Scanning a line is a lot like solving a puzzle, as there are only six kinds of metrical feet (two-to-three syllable combinations) one can find and use in English: iamb, trochee, dactyl, anapest, spondee, and pyrrhic.</p>
                                <p>Scansion is a crucial skill not only for scholars working on poetry from Geoffrey Chaucer to Edgar Allan Poe, but also for classical actors when preparing to perform plays by William Shakespeare. English Renaissance plays employed the closed form of <i>iambic pentameter</i> (lines comprising five metrical feet each) for two reasons: it facilitated memorization; and provided cues as where to place syllabic stress, aiding in correct pronunciation and clarity of phrasing. If you recall attending a Shakespeare play where you felt you could really understand what was being said, it is likely the actors scanned first, mapping out the stresses before they memorized. Additionally, a growing group of writers, self-styled New Formalists including the likes of A. E. Stallings and Tyehimba Jess, are also driving a renewed interest in sonnets and other closed forms requiring the ability to scan.</p>
                                <p>Due to the last century’s preference for open forms, the skill known as scanning has begun to disappear from the academy. To help re-seed the disciplines of poetry, classical acting, and literary criticism with the skill of scansion, we propose the development of a web-based mobile application where users can learn and practice the skill of scansion through a game-ified, block-learning interface, supporting literary study, theatre practice, and public engagement with poetry.</p>
                                <p>Over the past four years, PI Tavares has conducted classroom experiments with color-coded LEGO&trade; toys to teach undergraduate literature and theatre majors how to scan Shakespeare’s sonnets. Inspired by the inability to use this hands-on strategy in the classroom due to the coronavirus global pandemic, the idea for a mobile game developed out of a CARI networking event. The app connects all levels of UA learners: undergraduates in CI Crawford’s CS 495 course will create the web application, to then tested by undergraduates in PI Tavares’s EN 333 course beginning in fall of 2021. Tavares is currently then collaborate with graduate RA Pate, a doctoral candidate in the Hudson Strode Program in Renaissance Studies, to develop training workshops and write an article based on data collected during testing for publication in a pedagogy journal. In so doing, the project connects faculty from the disciplines of Renaissance Literature to Computer Science; relies on the interlocking efforts of UA undergraduates, graduate students, and faculty; and connects UA with the globe.</p>
                                <h4>&#10087; Team</h4>
                                <p><b><a href="https://english.ua.edu/people/etavares/">Elizabeth E. Tavares</a></b>, PhD, is an assistant professor of English at the University of Alabama, and co-principal investigator for <i>SyllaBits</i>. A member of the <a href="https://strode.english.ua.edu/">Hudson Strode Program in Renaissance Studies</a>, she specializes in early English drama, her research foci include playing companies, theatre history, and Shakespeare in performance. Through the support of grants and fellowships from the NEH, Mellon Foundation, Society for Theatre Research, and Newberry, Folger, and Huntington libraries, this research has won prizes from the Medieval and Renaissance Drama Society and Illinois Humanities Research Institute. Tavares’s scholarship and reviews have appeared in <i>Shakespeare Bulletin, Shakespeare Studies, The Map of Early Modern London, Notes & Queries,</i> and <i>Hybrid Pedagogy,</i> among others. A working dramaturg, she is the artistic director of the <a href="https://adhc.lib.ua.edu/alabamashakespeare/">Alabama Shakespeare Project</a>.</p>
                                <p><b><a href="https://htilua.org/about-the-pi">Chris S. Crawford</a></b>, PhD, is an assistant professor of Computer Science at the University of Alabama, and co-principal investigator for <i>SyllaBits</i>. He directs the <a href="https://htilua.org/">Human-Technology Interaction Lab</a> with the goal of leveraging novel neurophysiological sensing technologies, software engineering, and robotics to create tools and applications that support the exploration of Brain-Robot (BRI) and Human-Computer (HCI) Interaction. His projects with students, including brain-controlled drones, have been featured on the PBS NewsHour, Today Extra, Engadget, among others.</p>
                                <p><b>Tera K. Pate</b> is a doctoral student of English at the University of Alabama, research assistant for <i>SyllaBits</i>, and a member of the <a href="https://strode.english.ua.edu/">Hudson Strode Program in Renaissance Studies</a>. (MA, University of Alabama; BA, Mississippi University for Women). To date her research has focused on gendered violence in medieval and early modern literature.</p>
                                <p>The website and interface was originally developed by undergraduate designers, a part of the University of Alabama course, “CS 495: Capstone Computing,” in spring of 2021, including <b>Madison Macaulay</b>, <b>Connor Meadows</b>, <b>Lyle Stokes</b>, and <b>Jeremy Tucker</b>. Visual Studio Code and GitHub were used to implement a ReactJS app with Bootstrap-React styling. Using an Apache Server, MySQL, and PHP to implement an API, backend and hosting is provided by eTech. Invaluable support has been provided by John Hawkins, director of web communications for the College of Arts and Sciences at the University of Alabama.</p>
                                <h4>&#10087; Patron</h4>
                                <p><i>SyllaBits</i> is a project of the <a href="https://cari.ua.edu/">Collaborative Arts Research Initiative</a> at the University of Alabama.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Credit;