import React, { Component } from 'react';
import Card from './Card';
import AddCard from './AddCard';

class CardList extends Component {
  state = {
    cardContent: [
      {
        title: 'First Card',
        content: 'First card content'
      },
      {
        title: 'Second Card',
        content: 'Second card content'
      }
    ]
  }
  addThing = (newThing) => {
    this.setState({cardContent: [...this.state.cardContent, newThing]})
  }
    render() {
        let logger = (event, message) => {
            console.log(message);
          };
      
         
        return (
          <div>
            <AddCard addThing={this.addThing}/>
            <section className="card-list">
              <br/>
                {this.state.cardContent.map((content, index) => <Card key={index} title={content.title} content={content.content} clickHandler={logger}></Card>)}
            </section>
          </div>
        );
    }
}

export default CardList;