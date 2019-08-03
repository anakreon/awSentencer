import React, { Component } from 'react';
import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionButtons,
} from "@material/react-card";
import {
    Button,
    Headline6,
    Body1
} from '@material/react-typography';

export class SentenceCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card className="mdc-card">
                <CardPrimaryContent>
                    <div>
                        <Headline6 className="headline">
                            {this.props.headline}
                        </Headline6>
                        <Body1 className="text">
                            {this.props.children}
                        </Body1>
                    </div>
                </CardPrimaryContent>
                <CardActions>
                    <CardActionButtons>
                        <Button onClick={this.props.onButtonClick}>{this.props.buttonLabel}</Button>
                    </CardActionButtons>
                </CardActions>
            </Card>
        );
    }
}
