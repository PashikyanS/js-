document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const color = document.getElementById('color').value;
    const birthdate = document.getElementById('birthdate').value;
    document.getElementById('formContainer').style.display = 'none';
    const outputHeading = document.getElementById('outputHeading');
    outputHeading.style.display = 'block';
    document.getElementById("outputList").style.display = "block";
    const outputList = document.getElementById('outputList');

    
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        Name: ${firstName}, Last Name: ${lastName}, Age: ${age},Favorite Color: ${color}, Date: ${birthdate}
        <button class="deleteBtn">Delete</button>
    `;
    outputList.appendChild(listItem);
    listItem.querySelector('.deleteBtn').addEventListener('click', function() {
        outputList.removeChild(listItem);
    });
    const addMoreButton = document.getElementById('addMoreButton');
    addMoreButton.style.display = 'block';
});
document.getElementById('addMoreButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
    
    this.style.display = 'none';
    // document.getElementById("outputList").style.display = "none";
    document.getElementById("outputHeading").style.display = "none";
    document.getElementById('userForm').reset();
});
