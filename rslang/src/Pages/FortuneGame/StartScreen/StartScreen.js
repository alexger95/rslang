import React from 'react';
import './StartScreen.scss';
import { Translation } from 'react-i18next';
import { Button } from 'react-bootstrap';

const StartScreen = (props) => {
    return (
        <div className="row Fortune-Startscreen">
            <div className="md-col-12 w-100 p-3 d-flex flex-column justify-content-center align-items-center">
                <div className="FortuneStartscreen-Logo"></div>
                <p className="mb-4 text-center mt-3">{<Translation>
                    {
                        (t) => <>{t('fortuneGame.1')}</>
                    }
                </Translation>}</p>
                <Button onClick={props.gameStart} variant={'primary'}>
                    {<Translation>
                        {
                            (t) => <>{t('fortuneGame.2')}</>
                        }
                    </Translation>}
                </Button>
            </div>
        </div >
    )
}

export default StartScreen
