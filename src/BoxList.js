import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

export default class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes: [] };
        this.create = this.create.bind(this);
    }
    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }
    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        });
    }
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box 
                key={box.id} 
                id={box.id} 
                height={box.height} 
                width={box.width} 
                color={box.color}
                removeBox={ () => this.remove(box.id) } />
        ));
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm createBox={this.create}/>
                {boxes}
            </div>
        );
    }
}
