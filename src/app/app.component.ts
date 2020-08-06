import { Component } from '@angular/core'
import { WikipediaService } from './wikipedia.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = []

  constructor(private wikipedia: WikipediaService) { }


  onTerm(term: string): void {
    // console.log('I am the app and here is the term', term)
    // const results = this.wikipedia.search(term)

    this.wikipedia.search(term).subscribe((response) => {
      console.log(response)
      this.pages = response

    })
  }

}



// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space