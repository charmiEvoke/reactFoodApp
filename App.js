var heading =  React.createElement('h1',{
    id:'1',
    key:'1'
},"namaste javascript");

var heading2 =  React.createElement('h1',{
    id:'2',
    key:'2'
},"namaste javascript 2");

var container =  React.createElement('div',{
    id:'container'
},[heading,heading2]);

var root = ReactDOM.createRoot(document.getElementById('root'));
   
root.render(container);