import React from 'react';
export default class ValutaApp extends React.Component {
    constructor (props){
        super(props);
        this.state ={ items:[], text: '', rate: ''}
        this.eventHandlerChange = this.eventHandlerChange.bind(this);
        this.eventHandlerKurs = this.eventHandlerKurs.bind(this);
        this.eSubmit = this.eSubmit.bind(this);
    }
    render() {
        return(
            <div>
                <h3>Valuta</h3>
                <ValutaList items={this.state.items}/> 
                <form onSubmit={this.eSubmit} >
                    <label htmlFor="new-valuta">Ange valuta &nbsp; </label>
                    <input id="new-valuta" onChange={this.eventHandlerChange} value={this.state.text} /><br/>                    
                    <label htmlFor="new-kurs">Ange kurs &nbsp;&nbsp;&nbsp; </label>
                    <input id="new-kurs" onChange={this.eventHandlerKurs} value={this.state.rate} /><br/>
                    <button>Lägg till Valuta &amp; Kurs {this.state.items.length + 1}</button> 
                </form>
            </div>
        );
    }
    eventHandlerChange(e) {
        //console.log(e.target.value);
        this.setState({text: e.target.value});
    
    }
    eventHandlerKurs(e) {
        //console.log(e.target.value);
        this.setState({rate: e.target.value });
    
    }
    eSubmit(e) {
        e.preventDefault(); 
        if (this.state.text.length === 0 || this.state.rate.length === 0){
            return;
        }
        const newItem = { 
            text: this.state.text,
            rate: this.state.rate,
            id: Date.now()
        };
        // Om JavaScript
        // items.push(newItem);
        // text = '';
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: '',
            rate: ''
        }));
    }
}

class ValutaList extends React.Component {
    render() {
        return(
            <ul>
                {this.props.items.map (item => (
                    <li key={item.id}>{item.text +' - '+item.rate}</li>
                ))}
            </ul>
        )
    }
}