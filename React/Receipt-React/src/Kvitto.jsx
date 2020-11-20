import React from 'react';
var Sum = window.$Sum =0;
export default class KvittoApp extends React.Component {
    constructor (props){
        super(props);
        this.state ={ items:[], vara: '', antal: '', pris: '', radsumma: ''}
        this.eventHandlerChange = this.eventHandlerChange.bind(this);
        this.eventHandlerKurs = this.eventHandlerKurs.bind(this);
        this.eventHandlerPris = this.eventHandlerPris.bind(this);
        this.eSubmit = this.eSubmit.bind(this); 
    }
    
    render() {
        return(
            <div>
                <h3><strong>kvitto</strong></h3>
                    <form onSubmit={this.eSubmit} >
                    <label htmlFor="new-vara">Produkt: &nbsp; </label>
                    <input id="new-vara" onChange={this.eventHandlerChange} value={this.state.vara} /><br/><br/>                    
                    <label htmlFor="new-antal">Antal: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                    <input id="new-antal" onChange={this.eventHandlerKurs} value={this.state.antal} /><br/><br/>
                    <label htmlFor="new-pris">Pris: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                    <input id="new-pris" onChange={this.eventHandlerPris} value={this.state.pris} /><br/>
                    <button>Nästa &nbsp; ({this.state.items.length})</button> 
                    <VaruList items={this.state.items} />
                    <strong>Summa: {Sum} kronor</strong>
                </form>
            </div>
        );
    }
    eventHandlerChange(e) {
        //console.log(e.target.value);
        this.setState({vara: e.target.value});
    }
    eventHandlerKurs(e) {
        //console.log(e.target.value);
        this.setState({antal: e.target.value });
    }
    eventHandlerPris(e) {
        //console.log(e.target.value);
        this.setState({pris: e.target.value});
    }

    eSubmit(e) {
        e.preventDefault(); 
        if (this.state.vara.length === 0 || this.state.antal.length === 0 || this.state.pris.length === 0){
            return;
        }   
              
        const newItem = {
            vara: this.state.vara,
            antal: this.state.antal,
            pris: this.state.pris,
            radsumma: this.state.antal * this.state.pris,
            id: Date.now()
        };
        Sum += newItem.radsumma;     // Adderar varje radsumma till slutsumman

        this.setState(state => ({
            items: state.items.concat(newItem),
            vara: '',
            antal: '',
            pris: '',
            radsumma: ''
        }));
    }
}

class VaruList extends React.Component {4
    render() {       
        return(
            <ol type="1">
                {this.props.items.map (item => (
                    <li key={item.id}>{item.vara +' : '+item.radsumma+' $'}</li>
                ))}
            </ol>
        )
    }
}
