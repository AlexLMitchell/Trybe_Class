var personName = '';

let button_array = document.querySelectorAll('button');
button_array[0].addEventListener('click', goDark);
button_array[1].addEventListener('click', complainMessage);
button_array[2].addEventListener('click', finishTheStory);

document.querySelector('#name').addEventListener('change', function (element) {
  typeAndScream();
  personName = element.target.value;
});

function complainMessage() {
  alert('I told you not to do that ' + personName);
}

function typeAndScream() {
  document.getElementById('audio').play();
  personName = document.getElementById('name').value;
}

function goDark() {
  var body = document.getElementsByTagName('body')[0];
  if (body.className == '') {
    body.className = 'dark';
    document.querySelector('#name').disabled = false;
    button_array.forEach((btn, i) => {
      if (i > 0) btn.disabled = false;
    });
  } else {
    body.className = '';
    document.querySelector('#name').disabled = true;
    button_array.forEach((btn, i) => {
      if (i > 0) btn.disabled = true;
    });
  }
}

function finishTheStory() {
  document.getElementById('story').innerHTML =
    'So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!';
}
