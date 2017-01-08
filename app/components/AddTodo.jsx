var React =require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    onFormSubmit:function(e){
      e.preventDefault();
        var TodoText = this.refs.todotext.value;
        var {dispatch} =this.props;
        if(TodoText.length>0){
            this.refs.todotext.value='';
            dispatch(actions.startAddTodo(TodoText));
        }else{
            this.refs.todotext.focus();
        }
        
    },
   render: function(){
       return(
            <div className="container__footer">
             <form onSubmit={this.onFormSubmit}>
             <input type="text" ref="todotext" placeholder="What do you need to do?"></input>
             <button className="button expanded">Add Todo</button>
             </form>
           
           </div>   
       
       
       );
   }
});

export default connect()(AddTodo);