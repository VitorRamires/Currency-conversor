import React, {Component} from "react"

export default class Conversor extends Component{

constructor(props){
    super(props);
    this.state = {
        moedaA_valor:"",
        moedaB_valor:0,
    } //o state serve para armazenarmos os dados, para usarmos depois

    this.converter = this.converter.bind(this)

} // para acessar as propriedades usadas no App.js
// devemos usar o this, para nos referir a uma propriedade usadana nossa classe

converter(){

    let inputText = document.getElementById('texto')
    if(inputText.value.length === 0){
        alert('Preencha o campo')
    } else {

   let de_para = `${this.props.moedaA}_${this.props.moedaB}`
   let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=69c0f633a3bcfd12bbde`


   fetch(url)
    .then(res => {
        return res.json()
    })
    .then(json => {
        let cotacao = json[de_para];
        let moedaB_valor = (parseFloat (this.state.moedaA_valor) * cotacao).toFixed(2)
        this.setState({moedaB_valor})
    })
}

}


render(){
return(
    <div className = "conversor">
    <p>{this.props.moedaA} para {this.props.moedaB}</p>
    <input type="text" id="texto" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>

    <button type="button" value="Converter" onClick = {this.converter}>Converter</button>
    <h2>{this.state.moedaB_valor}</h2>
    </div>
)
} //render
}// final do componente


