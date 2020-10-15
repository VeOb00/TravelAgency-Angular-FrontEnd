import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const navSelector = document.querySelector('nav');
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    navSelector.style.backgroundColor = '#035959';
    navSelector.style.backgroundImage = 'unset';
    navSelector.style.padding = '10px 10px';
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    navSelector.style.backgroundColor = 'unset';
    navSelector.style.backgroundImage =
      'linear-gradient(rgba(3, 89, 89, 0.8), rgba(0, 0, 0, 0))';
    navSelector.style.padding = '30px 10px';
    // document.getElementById('logo').style.fontSize = '35px';
  }
}
