import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.onscroll = function () {
      scrollFunction();
    };
  }
}

function scrollFunction() {
  const navSelector = document.querySelector('nav');
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    navSelector.style.backgroundColor = '#035959';
  } else {
    navSelector.style.backgroundImage =
      'linear-gradient(rgba(3, 89, 89, 1), rgba(3, 89, 89, 0.8))';
    navSelector.style.backgroundColor = 'unset';
  }
}
