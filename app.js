// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: "Steak Dinner", calories: 1000 },
      { id: 1, name: "Cookie", calories: 400 },
      { id: 2, name: "Eggs", calories: 300 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  // Public methods
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    },
    addItem: function(name, calories) {
      // PICK BACK UP HERE
      // !!!!!!!!!!
    }
  };
})();

// UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }
  // Public methods
  return {
    populateItemList: function(items)  {
      let html = '';

      items.forEach(function(item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name} </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
        
      });
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      }
    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {
  // load event listeners
  const loadEventListeners = function() {
    // get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

  }

// Add item submit
const itemAddSubmit = function(e) {

  // get form input from UI Controller
  const input = UICtrl.getItemInput();

  // check for name and calorie input
  if(input.name !== '' && input.calories !== ``){
    // Add item
    const newItem = ItemCtrl.addItem(input.name, input.calories);
  }

  e.preventDefault();
}

  // Public methods
  return {
    init: function() {
      // Fetch items from data structure
      const items = ItemCtrl.getItems();


      // Populate list with items
      UICtrl.populateItemList(items);

      // load event listeners
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl);

// Initialize App
App.init();
