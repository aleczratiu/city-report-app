import React, { Component, Fragment } from 'react';
import Wrapper from '../../core/Wrapper';
import Label from '../../core/Label';
import styles from './AddIssue.scss';
import Header from '../../core/Header';
import GoogleMapsComponent from '../../core/GoogleMaps';
import { Link } from 'react-router-dom';

class AddIssue extends Component {
    state = {
        show: false,
        currentPosition: {
            lat: null,
            lng: null,
        },
        markerPosition: {
            lat: null,
            lng: null,
        },
        issue: {
            title: '',
            description: '',
            image: '',
        },
    };

    async componentDidMount() {
        await navigator.geolocation.getCurrentPosition(pos => (
          this.setState({
            currentPosition: {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            }
          })
        ));
    }

    getMarkerPosition = (position) => {
        console.log('marker', {
            lat: position.latLng.lat(),
            lng: position.latLng.lng(),
        })
        this.setState({
            currentPosition: {
                ...this.state.currentPosition,
                lat: position.latLng.lat().toString(),
                lng: position.latLng.lng().toString()
            }
        })
        console.log('this.state', this.state);
    }


    setIssueTitle = (title) => {
        this.setState({
            issue: {
                ...this.state.issue,
                title: title.target.value
            }
        })
    };

    setIssueDescription = (description) => {
        this.setState({
            issue: {
                ...this.state.issue,
                description: description.target.value
            }
        })
    };
    
    reportIssue = () => {
        this.props.addIssue({
            title: this.state.issue.title,
            description: this.state.issue.description,
            image: this.state.issue.image,
            lat: this.state.currentPosition.lat,
            lng: this.state.currentPosition.lng,
        });
    };

    loadImage = (image) => {
        const files = image.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ 
                issue: {
                    ...this.state.issue,
                    image: reader.result
                }
            });
        }
        reader.readAsDataURL(files);
    }

    render() {
        return (
            <Fragment>
                <Header>
                    <Link to="/">Home</Link>
                </Header>
                <Wrapper className={styles.addIssue}>
                    <div className={styles.formIssue}>
                        <Label>Issue title</Label>
                        <input type="text" onChange={this.setIssueTitle} />
                        <Label>Issue description</Label>
                        <textarea onChange={this.setIssueDescription} />
                        <input type="file" onChange={e => this.loadImage(e.target)} />
                        <button onClick={() => this.setState({ show: !this.state.show })}>Add location</button>
                        {this.state.show ?
                            <GoogleMapsComponent
                                currentPosition={this.state.currentPosition}
                                getMarkerPosition={this.getMarkerPosition}
                            /> :
                            null
                        }
                        <button onClick={this.reportIssue}>Report issue</button>
                    </div>
                </Wrapper>
            </Fragment>
        );
    }
};

export default AddIssue;
