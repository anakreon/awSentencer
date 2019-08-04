import React from 'react';
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
import PropTypes from 'prop-types';

const SentenceCard = ({ headline, children, buttonLabel, onButtonClick }) => {
    return (
        <Card className="mdc-card">
            <CardPrimaryContent>
                <div>
                    <Headline6 className="headline">
                        {headline}
                    </Headline6>
                    <Body1 className="text">
                        {children}
                    </Body1>
                </div>
            </CardPrimaryContent>
            <CardActions>
                <CardActionButtons>
                    <Button onClick={onButtonClick}>{buttonLabel}</Button>
                </CardActionButtons>
            </CardActions>
        </Card>
    );
}

SentenceCard.propTypes = {
    headline: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired
};

export default SentenceCard;