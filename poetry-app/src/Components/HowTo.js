/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import '../Styling/Login.css';
import '../Styling/DashboardStyling.css';

export default class Home extends Component {
     /**
     * Function to render the component. Renders the area that includes information about the how to play the game.
     */
    render() {
        return (
            <div className = "outer">
                <div className = "dash-inner">
                    <Container>
                        <Row>
                            <Col>
                                <h3>USER GUIDE</h3>
                                <p><i>Scansion</i> is an analytic skill for mapping the metrical structure of a line of verse. All poems can be broken into two categories: closed, with a strict structure in which the poet is working, such as a haiku, ghazal, or a sonnet; and open, where no predetermined form is employed.</p>
                                <h4>&#10087; How do I scan?</h4>
                                <p>A closed-form poem is scanned by marking its stressed and slack syllables, dividing them into metrical <i>feet</i>. Over the years, many different systems have been established to mark the scansion of a poem; at its most basic, however, one notates long syllables with a <i>breve</i> ( — ) and short syllables with an <i>ictus</i> ( / ). Scanning a line is a lot like solving a puzzle, as there are only 6 kinds of metrical feet one can find and use in English, each comprising either 2 or 3 syllables.</p>
                                <Table bordered hover size="sm">
                                    <thead>
                                        <tr className="text-center">
                                            <th>Type</th>
                                            <th>Pattern</th>
                                            <th>Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><i>Iamb</i></td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>long</td>
                                                            <td>short</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>be</td>
                                                            <td>hold</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i>Trochee</i></td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>/</th>
                                                            <th>—</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>short</td>
                                                            <td>long</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>/</th>
                                                            <th>—</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>ti</td>
                                                            <td>ger</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i>Dactyl</i></td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>/</th>
                                                            <th>—</th>
                                                            <th>—</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>short</td>
                                                            <td>long</td>
                                                            <td>long</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>/</th>
                                                            <th>—</th>
                                                            <th>—</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>des</td>
                                                            <td>per</td>
                                                            <td>ate</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i>Anapest</i></td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>long</td>
                                                            <td>long</td>
                                                            <td>short</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>un</td>
                                                            <td>der</td>
                                                            <td>stand</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i>Spondee</i></td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>/</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>short</td>
                                                            <td>short</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>/</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>down</td>
                                                            <td>town</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i>Pyrrhic</i></td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>—</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>long</td>
                                                            <td>long</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>—</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>with</td>
                                                            <td>the</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="text-center" colSpan="2">Something's not quite right if you get one of these:</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                            <th>—</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>long</td>
                                                            <td>short</td>
                                                            <td>long</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>/</th>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>short</td>
                                                            <td>long</td>
                                                            <td>short</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <p>Great! Now that you know the six types of metrical feet, the Game Pieces, you can begin to solve poems. A line of poetry in iambic pentametre will always have 5 feet. If each foot is either 2 or 3 syllables, then a line of poetry will range anywhere from 10 to 15 syllables—no more, no less.</p>
                                <p>Start by counting the total numbers of syllables for each line of poetry. Those lines in the poem with only 10 syllables will be highly regular, with each of the 5 feet only comprising 2 syllables apiece. You then know those lines definitely won’t have any dactyls or anapests, but only include iamb, trochee, spondee, and/or pyrrhic feet in some combination. Try to solve for these 10-syllable lines first, dropping the corresponding Game Piece onto the Game Board that corresponds with the right type of foot.</p>
                                <p>Once you have those regular lines solved, move next to those with more than 10 syllables. Start with the lines that have 11 syllables, as it means that only 1 of the 5 feet in that line will be either a dactyl or anapest. Once you solve those, move on to the lines with 12 syllables, as 2 of the 5 feet in that line will be dactyls or anapests. Continue, following this order, for lines with 13 or more syllables.</p>
                                <p>And yes, there are typically multiples of the same kind of foot in a line, and usually many iambs, as they are the most common for English. <a href="https://youtu.be/t-5alamjWms">Hear an example</a>, from William Shakespeare’s sonnet 29:</p>
                                <Table bordered hover size="sm">
                                    <thead className="text-center">
                                        <tr>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>When</b></td>
                                                            <td><b>in</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>dis</b></td>
                                                            <td><b>grace</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>with</b></td>
                                                            <td><b>For</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>/</th>
                                                            <th>—</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>tune</b></td>
                                                            <td><b>and</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>trochee</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>—</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>men's</b></td>
                                                            <td><b>eyes,</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>pyrrhic</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>I</b></td>
                                                            <td><b>all</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>a</b></td>
                                                            <td><b>lone</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>be</b></td>
                                                            <td><b>weep</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>my</b></td>
                                                            <td><b>out</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>cast</b></td>
                                                            <td><b>state</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>And</b></td>
                                                            <td><b>trou</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>ble</b></td>
                                                            <td><b>deaf</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>heav'n</b></td>
                                                            <td><b>with</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>my</b></td>
                                                            <td><b>boot</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>less</b></td>
                                                            <td><b>cries,</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>And</b></td>
                                                            <td><b>look</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>up</b></td>
                                                            <td><b>on</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>my</b></td>
                                                            <td><b>self</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>and</b></td>
                                                            <td><b>curse</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                            <td>
                                                <Table className="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>—</th>
                                                            <th>/</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>my</b></td>
                                                            <td><b>fate.</b></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">&#123; <i>iamb</i> &#125;</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <p>Are you feeling unsure of the number of syllables in a word or line? Read aloud, or listen to a recording. Unsure of your own regional accent? Search for words in the <a href="https://www.oed.com/">Oxford English Dictionary</a> online, which, at the top of each entry, provides multiple recordings of the word, typically providing a British and U.S. pronunciation at the least.</p>
                                <h4>&#10087; How do I play?</h4>
                                <p>Think you’ve got it? Now play the game!</p>
                                <ol>
                                    <li>If you are a new user, or you like to create an account in order to save your progress, sign in. You can also simply play as a guest.</li>
                                    <li>Once you are logged-in, select a poem from the Dashboard. This will take you to the Game Board, including the lines of the poem as well as empty slots marking the scansion.</li>
                                    <li>Draw Game Pieces from the bottom of the page that correspond to the right metrical feet in each line. You can use as many Pieces of the same type for each line, but each line can only contain up to five Pieces total, or five metrical feet—the <i>penta</i> in pentametre.</li>
                                    <li>Click the Bin icon next to a line if you need to clear the Pieces and start over.</li>
                                    <li>Feeling ready? Click Submit to see how you did.</li>
                                </ol>
                                <h4>&#10087; What if something's gone awry?</h4>
                                <p>If you are having trouble with something in the game, think the solution we’ve provided might not be correct, or just have other comments and queries, do <a href="mailto:eetavares@ua.edu?subject=SyllaBits%20Query">get in touch</a>!</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}