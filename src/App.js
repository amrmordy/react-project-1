import "./App.css";
import { useState } from "react";
function App() {
  

let [Books,setBooks]= useState([
  {id:1, statuse : 'CurrentlyReading', Title:"To Kill a Mockingbird", Auth:"Harper Lee",
  url:"url('http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api')"},
  {id:2, statuse : 'Read', Title:"Ender's Game",  Auth:"Orson Scott Card",
  url:"url('http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api')"},
  {id:3, statuse : 'CurrentlyReading', Title:"1776",Auth:"David McCullough",
   url:"url('http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api')"},
  {id:4, statuse : 'Read', Title:"Harry Potter and the Sorcerer's Stone", Auth: "J.K. Rowling",
  url:"url('http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api')"},
  {id:5, statuse : 'CurrentlyReading', Title:"The Hobbit",  Auth: "J.R.R. Tolkien",
  url:"url('http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api')"},
  {id:6, statuse : 'WantToRead', Title:"Oh, the Places You'll Go!",  Auth: "Seuss",
  url:"url('http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api')"},
  {id:7, statuse : 'WantToRead', Title:"Oh, the Places You'll Go!",  Auth: "Seuss",
  url:"url('http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api')"}
]);

let Actions = [
  {id:1 , name:'Currently Reading', value:'CurrentlyReading'},
  {id:2 , name:'Want To Reead', value:'WantToRead'},
  {id:3 , name:'Read', value:'Read'}
];
  
const Action = (book,action) => {
  debugger;
  let newBooks = Books.map((newbook) => {
    if(newbook.id == book.id){
      newbook.statuse=action.value;
      return {...newbook};
    }
    return newbook;
  })
    setBooks(newBooks);
};
let [searchname , setsearchname]= useState('');
const Search = (elem) => {
  console.log(elem);
  setsearchname(elem)
  // Books(searchname);
  // SearchResulte(elem)
  // Books.map(book) =>
  // Books.filter((c) =>
  //   c.Title.toLowerCase().includes(elem.toLowerCase())        
};
  
const showingBooks =
searchname === ""
  ? Books
  : Books.filter((c) =>
  c.Title.toLowerCase().includes(searchname.toLowerCase())
    );

  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a  
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(e) => Search(e.target.value)}
                defaultValue={searchname}
              />
            </div>
          </div>
          {searchname ? 
              <div className="search-books-results">
              <h2 className="bookshelf-title">Search Resulte</h2>
            <ol className="books-grid">
              {showingBooks.map((Book) => (
                    <li key={Book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: Book.url,
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="none" disabled>
                                Move to...
                              </option>
                                  {Actions.map((action) => (
                                      <option value={action.value} key={action.id}
                                    className={(Book.statuse == action.value ? 'active' : 'hidden')} onClick={() => Action(Book,action)}>{action.name}</option>
                                  
                                  ))};
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{Book.Title}</div>
                        <div className="book-authors">{Book.Auth}</div>
                      </div>
                    </li>

              ))

              }
            </ol>
              </div>
            : 
            
            <div className="search-books-results">
              <div> Search For Books Here</div>
              </div>
      }
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                      {Books.filter(Book => Book.statuse == 'CurrentlyReading').map((Book) => (
                        <li key={Book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage: Book.url,
                                }}
                              ></div>
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="none" disabled>
                                    Move to...
                                  </option>
                                  {Actions.map((action) => (
                                      <option value={action.value} key={action.id}
                                    className={(Book.statuse == action.value ? 'active' : 'hidden')} onClick={() => Action(Book,action)}>{action.name}</option>
                                  
                                  ))};
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{Book.Title}</div>
                            <div className="book-authors">{Book.Auth}</div>
                          </div>
                        </li>
                      ))
                      }
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                      {Books.filter(Book => Book.statuse == 'WantToRead').map((Book) => (
                        <li key={Book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage: Book.url,
                                }}
                              ></div>
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="none" disabled>
                                    Move to...
                                  </option>                                  
                                  {Actions.map((action) => (
                                      <option value="action.value" key={action.id}
                                    className={(Book.statuse == action.value ? 'active' : 'hidden')} onClick={() => Action(Book,action)}>{action.name}</option>
                                  
                                  ))};
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{Book.Title}</div>
                            <div className="book-authors">{Book.Auth}</div>
                          </div>
                        </li>
                      ))
                      }
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                      {Books.filter(Book => Book.statuse == 'Read').map((Book) => (
                        <li key={Book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage: Book.url,
                                }}
                              ></div>
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="none" disabled>
                                    Move to...
                                  </option>
                                  {Actions.map((action) => (
                                      <option value={action.value} key={action.id}
                                    className={(Book.statuse == action.value ? 'active' : 'hidden')} onClick={() => Action(Book,action)}>{action.name}</option>
                                  
                                  ))};
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{Book.Title}</div>
                            <div className="book-authors">{Book.Auth}</div>
                          </div>
                        </li>
                      ))
                      }
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
