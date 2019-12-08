var budgetController = (function(){

  var Expense = function(id,description,value){
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var Income = function(id,description,value){
    this.id = id;
    this.description = description;
    this.value = value;
  }


  var data = {
    allItems:{
      exp:[],
      inc:[]
    },
    totals:{
      exp:0,
      inc:0
    }
  }

  return{
    addItem:function(type,description,value){
      var newItem,ID;
      // create a new ID
      if(data.allItems[type].length > 0){
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      }else{
        ID = 0;
      }
       
      //Create a new item based on "inc" or "exp"
      if(type === "exp"){
        newItem = new Expense(ID,description,value);

      }else if(type === 'inc'){
        newItem = new Income(ID,description,value);
      }
  
      //push it in a data structure
      data.allItems[type].push(newItem);
      return newItem;

       
    },

    testing:function(){
      console.log(data)
    }
  }

  
})()


var UIController = (function(){

  var DOMStrings = {
    inputType:'.add__type',
    inputDescription:'.add__description',
    inputValue:'.add__value',
    inputButton:'.add__btn',
    incomeContainer:'.income__list',
    expenseContainer:'.expenses__list'
  }

  return {
    getInput:function(){

     return {

      type : document.querySelector(DOMStrings.inputType).value , //will be either inc or exp
      description : document.querySelector(DOMStrings.inputDescription).value ,
      value : document.querySelector(DOMStrings.inputValue).value

     }

    },

    addListItem:function(object,type){
       
      //create html string with placeholder text
      var html,newHtml;
      if(type === 'inc'){

        element = DOMStrings.incomeContainer;
        html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

      }else if(type === 'exp'){

        element = DOMStrings.expenseContainer;
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

      }
       

      //replace the placeholder text with some actual data
      newHtml = html.replace('%id%',object.id);
      newHtml = newHtml.replace('%description%',object.description);
      newHtml = newHtml.replace('%value%',object.value)

      //insert the html into the DOM
       document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);

    },

    getDOMstrings:function(){
      return DOMStrings
    }
  }


})()




//***************** Global APP controller */
var controller = (function(budgetController,UIController){

  var setEventListeners = function(){

    var DOM = UIController.getDOMstrings()

    document.querySelector(DOM.inputButton).addEventListener('click',ctrlAddItem)

    document.addEventListener('keypress',function(event){
        
    if(event.keyCode === 13 || event.which === 13){
       ctrlAddItem()
    }
  })
  }

  var ctrlAddItem = function(){

    var input, newItem;

    //1. Get the filed input data
    input = UIController.getInput();
    console.log(input) 

    //2. Add the item to the budget controller
    newItem = budgetController.addItem(input.type, input.description, input.value)
    //3. Add the item to the UI
    UIController.addListItem(newItem,input.type)

    //4. Calculate the budget
    
    //5. Display the budget on the UI
    
  }

  return {
    init:function(){
      console.log('Application has started!')
      setEventListeners()
    }
  }

})(budgetController,UIController)



controller.init()