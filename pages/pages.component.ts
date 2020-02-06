import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'first-page',
  templateUrl: './first.component.html'
})
export class FirstPageComponent {
  links: Links[] = [
    { href: "http://knnlindia.com/", title: 
    "Malaprabha & Gataprabha" },
    { href: "http://waterresources.kar.nic.in/Contacts%20&%20Directory-final/C.E,M.P.Z.Dharwad.htm", title: "FORmation of WCS" },
    { href: "", title: "" }
  ]
} 

@Component({
  selector: 'second-page',
  templateUrl: './second.component.html'
})
export class SecondPageComponent implements OnInit {
  loremipsum: string;

  ngOnInit() {
    this.loremipsum = "The California Association of Directors of Activities began when a few student council advisors got together to share common problems and solutions. Since that weekend in 1957 CADA has grown into the largest statewide support network for Activity Directors in the nation";
  }
}

/*
@Component({
  selector: 'third-page',
  templateUrl: './third.component.html'
})

//export class ThirdPageComponent {
 // count = 0;
//}
*/


@Component({
  selector: 'search-page',
  templateUrl: './search.component.html'
})
export class SearchPageComponent {
  search: string;
}
@Component({
  selector: 'pim-page',
  templateUrl: './pim.component.html'
})
export class PimPageComponent {
  search: string;
}


interface Links {
  icon?: string;
  title: string;
  href: string;
}



@Component({
  selector: 'third-page',
  templateUrl: './third.component.html',
  styleUrls: [ './pages.component.css' ]
})
export export class ThirdPageComponent {

  items = [
    {
      name: 'Formation of wcs'
    }, { 
      name: 'Registered wcs',
      items: [
        '1)Ghataphrabha',
        '2)malprabha',
      ]
    },
  ];
  visibleIndex = -1;
  showSubItem(ind) {
    this.myriver = ind;
    console.log(this.myriver);
    if (this.visibleIndex === ind) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = ind;
    }




  }
}
