import React, { Component } from 'react'
import { Card, CardText, Progress } from 'reactstrap'
import './sidebar.css'

const mock = [
  {
    id: 1,
    user: {
      name: "Pozterz"
    },
    project: {
      name: 'Test 0.5'
    }
  },
  {
    id: 1,
    user: {
      name: "Pozterz Again"
    },
    project: {
      name: 'Test 1'
    }
  },
  {
    id: 1,
    user: {
      name: "Pozterz V2"
    },
    project: {
      name: 'Test 2'
    }
  }
]

export default class Sidebar extends Component {
  render() {
    return (
      /** todo:sidebar must collasable for mobile screen size compatible */
      <div className="sidebar">
        {
          mock.map((data, index) => 
            <Card className="mb-2" body key={index}>
              <h3>
                {data.project.name}
              </h3>
              <h5>
                {data.user.name}
              </h5>
              <Progress value={Math.floor(Math.random()*99)} />
            </Card>
          )
        }
      </div>
    )
  }
}
