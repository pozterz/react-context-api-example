import React, { Component } from 'react'
import { Row, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

export default class Fifth extends Component {
  state = {
    timer: null,
    count: 10
  }

  componentDidMount = () => {
    let timer = setInterval(() => {
      this.tick()
      this.setState({ timer })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick() {
    this.setState((prevState, props) => ({
      count: prevState.count - 1
    }));
    if(this.state.count < 1) {
      const { array: { getImages }} = this.props
      getImages()
      clearInterval(this.state.timer)
    }
  }
  
  render() {
    const { array } = this.props
    return (
      <div>
        I will fetch data in {this.state.count} sec.
        <Row>
        {
          array.data.map(image => {
            return (
              <div className="col-md-3">
                <Card>
                  <CardImg top src={image.thumbnailUrl} width='150' />
                  <CardBody>
                    <CardText>{image.title}</CardText>
                  </CardBody>
                </Card>
              </div>
            )
          })
        }
        </Row>
      </div>
    )
  }
}
