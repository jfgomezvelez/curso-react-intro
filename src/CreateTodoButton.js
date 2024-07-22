import './CreateTodoButton.css';

function CreateTodoButton(){
    return (
      <button className="CreateTodoButton" 
      onClick={
        (event) => {
          console.log('clock')
        }
      }>+</button>
    );
}

export {CreateTodoButton};