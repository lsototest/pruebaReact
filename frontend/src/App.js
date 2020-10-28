import React from 'react';
import axios from "axios";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      tareas:[],
      id:0,
      descripcion:'',
      fechacreacion:'',
      vigente:''
    }

  }
  componentDidMount(){
    axios.get("http://localhost:8080/api2/")
    .then((res)=>{
      this.setState({
        tareas:res.data,
        id:0,
        descripcion:'',
        fechacreacion:'',
        vigente:''
      })
    })
  }
  submit(event,id){
    event.preventDefault();
    if(id === 0){
      axios.post("http://localhost:8080/api2/",{
        descripcion:this.state.descripcion,
        fechacreacion:this.state.fechacreacion,
        vigente:this.state.vigente
      })
      .then((res)=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:8080/api2/",{
        id:this.state.id,
        descripcion:this.state.descripcion,
        fechacreacion:this.state.fechacreacion,
        vigente:this.state.vigente
      }).then(()=>{
        this.componentDidMount();
      })

    }

  }
  delete(id){
    axios.delete(`http://localhost:8080/api2/${id}`)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get(`http://localhost:8080/api2/${id}`)
    .then((res)=>{
      console.log(res.data);
      this.setState({
        id:res.data.id,
        descripcion:res.data.descripcion,
        fechacreacion:res.data.fechacreacion,
        vigente:res.data.vigente
      })
    })
  }
  render(){
  return (
    <div className="container" >
    
    <div className="row">
    <div className="col s6">
        <form onSubmit={(e)=>this.submit(e,this.state.id)}>
        <div class="input-field col s12">
          <i class="material-icons prefix md-light">description</i>
          <input onChange={(e)=>this.setState({descripcion:e.target.value})} value={this.state.descripcion} type="text" id="autocomplete-input" class="autocomplete" required maxlength="300" />
          <label for="autocomplete-input">Ingrese Descripcion de Tarea (300 caracteres)</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix md-light">date_range</i>
          <input onChange={(e)=>this.setState({fechacreacion:e.target.value})} value={this.state.fechacreacion} type="date" id="autocomplete-input" class="autocomplete" required />
          <label for="autocomplete-input">Fecha de Creacion</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix md-light">description</i>
          <input onChange={(e)=>this.setState({vigente:e.target.value})} value={this.state.vigente} type="text" id="autocomplete-input" class="autocomplete" required maxlength="1" />
          <label for="autocomplete-input">Vigente</label>
        </div>
        <button class="btn waves-effect waves-light right" type="submit" name="action">Grabar
          <i class="material-icons right">send</i>
        </button>
        </form>
      </div>
      <div className="col s6">
      <table>
        <thead>
          <tr>
              <th>Descripcion</th>
              <th>Fecha de Creacion</th>
              <th>Vigente</th>
              <th>Editar</th>
              <th>Borrar</th>
          </tr>
        </thead>

        <tbody>
          {
            this.state.tareas.map(tarea=>
              <tr key={tarea.id}>
                <td>{tarea.descripcion}</td>
                <td>{tarea.fechacreacion}</td>
                <td>{tarea.vigente}</td>
                <td>
                <button onClick={(e)=>this.edit(tarea.id)} class="btn waves-effect waves-light" type="submit" name="action">
                  <i class="material-icons">edit</i>
                </button>
                </td>
                <td>
                <button onClick={(e)=>this.delete(tarea.id)} class="btn waves-effect waves-light" type="submit" name="action">
                  <i class="material-icons">delete</i>
                </button>
                </td>
              </tr>
              )
          }
          
        </tbody>
      </table>
      </div>
    
    </div>
    </div>
  );
  }
}

export default App;
