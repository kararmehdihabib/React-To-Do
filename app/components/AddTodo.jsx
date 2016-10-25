var React =require('react');


var AddTodo = React.createClass({
    onFormSubmit:function(e){
      e.preventDefault();
        var TodoText = this.refs.todotext.value;
        
        if(TodoText.length>0){
            this.refs.todotext.value='';
            this.props.onAddTodo(TodoText);
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

module.exports = AddTodo;