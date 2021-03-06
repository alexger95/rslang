import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { Translation } from 'react-i18next';

import { AlertRed } from "../../../Components/Alert/Alert";
import { LoginLayout } from "./LoginLayout";
import * as Const from "../../../constant";
import { getCookie } from "../../../Components/Tools/getCookie";
import { Redirect } from "react-router-dom";
import { fetchAPI } from "../../../Components/Tools/fetchAPI";

import { setAllSettings } from "../../../Store/Actions";
import { setDayLearningWords } from '../../../Store/PlayZonePage/actions';
import { getWords, saveWordsInLocalStorage } from "../../../service";

import "./Login.scss";

const mapStateToProps = (store) => {
  return {
    level: store.appSettings.level,
    newWordsCount: store.appSettings.newWordsCount,
    dayLearningWords: store.appSettings.dayLearningWords,
  };
};

const mapActionToProps = {
  setDayLearningWords,
  setAllSettings,
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      loginState: false,
      loginStatus: "error",
      alertMessage: "wrong username or password",
      inputEmail: "",
      inputPassword: "",
      showModal: false,
    };

    this.emailInputHandler = this.emailInputHandler.bind(this);
    this.passwordInputHandler = this.passwordInputHandler.bind(this);
  }

  requestSignin = async (e) => {
    e.preventDefault();
    const content = await fetchAPI("signin", {
      email: this.state.inputEmail,
      password: this.state.inputPassword,
    });
    this.loginResult(content);
    if (content.message === Const.LOGIN.ON) {
      this.requestDayLearningWords();
      this.requestSettings();
    }
  };

  requestSettings = async () => {
    const results = await fetchAPI("getSettings").then((data) => {
      this.props.setAllSettings(data);
    });
  };

  requestDayLearningWords = async () => {
    const words = await getWords(this.props.level, this.props.newWordsCount);
    if (words.length !== 0) {
      this.props.setDayLearningWords(words);
      saveWordsInLocalStorage(words);
    }
  };

  loginResult = (answer) => {
    if (answer.message === "Authenticated") {
      this.setState({ loginStatus: "correct", alertMessage: "Hellow User" });
      this.setLoginCookie(answer.userId, answer.token);
    }
    this.setState({ showAlert: true });
  };

  setLoginCookie = (userId, token) => {
    document.cookie = `userId=${userId}; Path=/; max-age=14400`;
    document.cookie = `token=${token}; Path=/; max-age=14400`;
  };

  checkCookie = () => {
    if (getCookie("userId") !== undefined) {
      return true;
    }
    return false;
  };

  emailInputHandler = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  passwordInputHandler = (event) => {
    this.setState({ inputPassword: event.target.value });
  };

  render() {
    if (!this.checkCookie()) {
      return (
        <AlertRed
          showAlert={this.state.showAlert}
          onSubmit={GoToMain}
          HeadText={"Login " + this.state.loginStatus}
          MainText={this.state.alertMessage}
        >
          {this.state.showModal === true ?
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>
                  <Translation>
                    {
                      (t) => <>{t('auth.5')}</>
                    }
                  </Translation>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p><Translation>
                  {
                    (t) => <>{t('auth.6')}</>
                  }
                </Translation></p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => this.setState({ showModal: false })}>
                  <Translation>
                    {
                      (t) => <>{t('auth.7')}</>
                    }
                  </Translation></Button>
              </Modal.Footer>
            </Modal.Dialog> : null
          }
          {this.state.showModal === false ?
            <LoginLayout>
              <form onSubmit={(e) => this.requestSignin(e)}>
                <h2 className="text-center">
                  <Translation>
                    {
                      (t) => <>{t('auth.1')}</>
                    }
                  </Translation>
                </h2>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required="required"
                    onChange={this.emailInputHandler}
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    pattern={Const.PASSWORD_PATTERN}
                    className="form-control"
                    placeholder="Password"
                    required="required"
                    onChange={this.passwordInputHandler}
                  ></input>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    <Translation>
                      {
                        (t) => <>{t('auth.1')}</>
                      }
                    </Translation>
                  </button>
                </div>
                <div className="clearfix">
                  <label className="pull-left checkbox-inline"></label>
                  <NavLink to='#t' onClick={() => this.setState({ showModal: true })} className="pull-right">
                    <Translation>
                      {
                        (t) => <>{t('auth.2')}</>
                      }
                    </Translation>
                  </NavLink>
                </div>
              </form>
              <p className="text-center">
                <NavLink to="/createanaccount"><Translation>
                  {
                    (t) => <>{t('auth.3')}</>
                  }
                </Translation></NavLink>
              </p>
            </LoginLayout> : null
          }
        </AlertRed>
      );
    } else {
      return <GoToMain />;
    }
  }
}

class GoToMain extends React.Component {
  render() {
    return <Redirect to="/main-page" />;
  }
}

export default connect(mapStateToProps, mapActionToProps)(Login);
