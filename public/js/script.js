
function loadData() {
  return new Promise((resolve, reject) => {
    fetch('https://api-dishes.vercel.app/')
      .then(result => result.json())
      .then(result => {
        resolve(result);
      })
      .catch(err => reject(err));
  });
}

function updateTable(data) {
    const tableBody = document.querySelector('#table tbody');
  
    data.forEach(dish => {
      const row = tableBody.insertRow();
  
      const cellid = row.insertCell(0);
      cellid.textContent = dish.idDish;
  
      const cellName = row.insertCell(1);
      cellName.textContent = dish.name;

      const cellCal = row.insertCell(2);
      cellCal.textContent = dish.calories;
  
      const cellIsVeg = row.insertCell(3);
      cellIsVeg.textContent = dish.isVegetarian ? "Yes": "No";
  
      const cellVal = row.insertCell(4);
      cellVal.textContent = dish.value;
  
      const cellComments = row.insertCell(5);
      cellComments.textContent = dish.comments;
    })
}

function begin() {
    document.addEventListener('DOMContentLoaded', () => {
        loadData()
          .then(result => {
            updateTable(result.data)
          })
          .catch(error => {
            console.error('Error al cargar datos:', error)
          });
      })
}


function addDish(newDish) {
    return new Promise((resolve, reject) => {
      fetch('https://api-dishes.vercel.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDish),
      })
        .then(result => result.json())
        .then(result => {
          resolve(result);
        })
        .catch(err => reject(err));
    });
    begin()
  }
  
  function submitForm() {
    const idDish = document.getElementById('dishName').value
    const dishName = document.getElementById('dishName').value
    const calories = document.getElementById('calories').value
    const isVegetarian = document.getElementById('isVegetarian').value === 'true'
    const value = document.getElementById('value').value
    const comments = document.getElementById('comments').value
  
    const newDish = {
      idDish: idDish,
      name: dishName,
      calories: parseInt(calories, 10),
      isVegetarian: isVegetarian,
      value: parseFloat(value),
      comments: comments,
    };
  
    addDish(newDish)
      .then(result => {
        console.log('Nuevo plato agregado:', result);
      })
      .catch(error => {
        console.error('Error al agregar nuevo plato:', error);
      });
  }

  begin()
  