import './style.css';

let btn = document.createElement('button');
btn.innerHTML = 'summit';
document.body.appendChild(btn);

btn.onclick = () => {
  let div = document.createElement('div');
  div.innerHTML = 'item';
  document.body.appendChild(div);
}