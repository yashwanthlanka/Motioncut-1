
function selectPlan(plan) {
    alert('You have selected the ' + plan + ' plan.');
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#007BFF';
    }
    var selectedButton = document.querySelector('button[onclick="selectPlan(\'' + plan + '\')"]');
    selectedButton.style.backgroundColor = '#0056b3';
}