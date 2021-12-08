import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
  <h1>Template example</h1>
  <h2>This is example</h2>
  <div class="box">
  <form>
  <label for="Enter your name">Enter Your Name:</label>
  <input type="text" id="fname" name="fname"><br>
  <label for="Enter your department">Enter Your department:</label>
  <input type="text" id="dpart" name="fpart"><br>
  <label for="tell">Tell us a little about yourself:</label>
  <input type="text" id="summary" name="summary"><br>
  <p>Do You Exercise at Home?</p>
  <input type="radio" id="Yes" name="exercise" value="Yes">
  <label for="choose">Yes</label>
  <input type="radio" id="No" name="Exercise" value="No">
  <label for="choose">No</label>
  <p>How do You like to read about Your favorite topics?</p>
  <input type="checkbox" id="books" name="read" value="books">
  <label for="read">Books</label>
  <input type="checkbox" id="online resorces" name="read" value="online resources">
  <label for="read">Online Resources</label>
  <input type="checkbox" id="Phone apps" name="read" value="Phone apps">
  <label for="read">Phone Apps</label>
  <input type="checkbox" id="magazines" name="read" value="magazines">
  <label for="read">Magazines</label><br><br>
  
  <label for="movies">What genre of movies do you like?</label><br>
  <select id="movies" name="movies" size="1">
  <option value="horror">Horror</option>
  <option value="horror">Comedy</option>
  <option value="horror">Herioc</option>
  <option value="horror">Romantic</option>
  </select>
  <br><br>
  <input type="submit">

  </form>
  </div>
  `,
  
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
