import React, {Component} from 'react';
import { Card } from 'antd';
const { Meta } = Card;

class AlbumCard extends Component {
    state = {

    }

    //  event listeners here 

    render() {
        return (
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="AM album cover" src={this.props.image} id = {this.props.id} />}
        
          >
          </Card>
        )
    }
}

export default AlbumCard;