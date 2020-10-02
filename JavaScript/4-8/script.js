window.onload = function () {
  let buttons = document.getElementsByClassName('btn');
  let middle_block = document.querySelector('nav .middle-block');

  let pal = document.getElementById('pallete');
  let tools = document.getElementById('tools');

  let colors = {
    darkblue: 'darkblue',
    lightblue: 'lightblue',
    yellow: 'yellow',
    pink: 'pink',
    white: 'ivory',
    black: '#212121',
  };

  let preferences = JSON.parse(localStorage.getItem('preferences')) || null;

  if (!preferences) {
    preferences = {
      bg_color: 'white',
      font_color: colors.black,
      font_size: '16px',
    };
    localStorage.setItem('preferences', JSON.stringify(preferences));
  } else {
    document.querySelector('body').className = preferences.bg_color;
    document.querySelector('section').style.fontSize = preferences.font_size;
    document.querySelector('section').style.color = preferences.font_color;
  }

  for (color in colors) {
    let div = document.createElement('div');
    let child = middle_block.appendChild(div);
    child.className = 'box';
    child.style.backgroundColor = color;
    child.addEventListener('click', function (element) {
      document.getElementsByTagName('section')[0].style.color =
        element.target.style.backgroundColor;
      preferences.font_color = element.target.style.backgroundColor;
      localStorage.setItem('preferences', JSON.stringify(preferences));
    });
  }

  document.getElementById('reduce').addEventListener('click', function () {
    let sz = document.querySelector('section').style.fontSize;
    document.querySelector('section').style.fontSize =
      (parseInt(sz) - 2 || 12).toString() + 'px';
    preferences.font_size = document.querySelector('section').style.fontSize;
    localStorage.setItem('preferences', JSON.stringify(preferences));
  });

  document.getElementById('raise').addEventListener('click', function () {
    let sz = document.querySelector('section').style.fontSize;
    document.querySelector('section').style.fontSize =
      (parseInt(sz) + 2 || 18).toString() + 'px';
    preferences.font_size = document.querySelector('section').style.fontSize;
    localStorage.setItem('preferences', JSON.stringify(preferences));
  });

  for (button of buttons) {
    button.addEventListener('click', function (btn) {
      switch (btn.target.id) {
        case 'font-color':
          tools.className = 'hidden-block';
          if (pal.className === 'middle-block') pal.className = 'hidden-block';
          else pal.className = 'middle-block';
          break;

        case 'font-size':
          pal.className = 'hidden-block';
          if (tools.className === 'middle-block')
            tools.className = 'hidden-block';
          else tools.className = 'middle-block';
          break;

        case 'font-mode':
          toggleFontMode(btn.target);
          break;
      }
    });
  }

  function toggleFontMode(el) {
    let class_name = document.querySelector('body').className;
    if (class_name == 'black') {
      document.querySelector('body').className = 'white';
      el.innerHTML = 'Dark Mode';
    } else {
      document.querySelector('body').className = 'black';
      el.innerHTML = 'White Mode';
    }
    preferences.bg_color = document.querySelector('body').className;
    localStorage.setItem('preferences', JSON.stringify(preferences));
  }
};
