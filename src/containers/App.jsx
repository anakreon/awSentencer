import React, {Component} from 'react';
import TopAppBar, { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import TopAppBarContents from '../components/topAppBarContents';
import Questionnaire from './questionnaire';
import SentencePrinter from './sentencePrinter';

class App extends Component {
    appName = 'Sentencer';
    constructor (props) {
        super(props);
        this.openGithubPage = this.openGithubPage.bind(this);
    }
    openGithubPage () {
        window.open('https://github.com/anakreon/awSentencer');
    }
    render () {
        return (
            <React.Fragment>
                <TopAppBar>
                    <TopAppBarContents
                        appName={this.appName}
                        onIconClick={this.openGithubPage}>
                    </TopAppBarContents>
                </TopAppBar>
                <TopAppBarFixedAdjust>
                    <Grid>
                        <Row>
                            <Cell>
                                <Questionnaire>
                                </Questionnaire>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <SentencePrinter>
                                </SentencePrinter>
                            </Cell>
                        </Row>
                    </Grid>
                </TopAppBarFixedAdjust>
            </React.Fragment>
        );
    }
}

export default App;
