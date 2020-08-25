function main() {

    const baseUrl                       =   "https://web-server-book-dicoding.appspot.com";

    // const getBook = () => {
    //     //membuat instance dari XMLHttpRequest
    //     const xhr                           =   new XMLHttpRequest();
        

    //     //membuat callback jika response berhasil dan gagal
    //     xhr.onload                          =   function()
    //                                             {
    //                                                 const responesJson      =   JSON.parse(this.responseText);
    //                                                 if(responesJson.error)
    //                                                 {
    //                                                     showResponseMessage(responesJson.message);
    //                                                 }
    //                                                 else
    //                                                 {
    //                                                     renderAllBooks(responesJson.books);
    //                                                 }
    //                                             }

    //     xhr.onerror                         =   function()
    //                                             {
    //                                                 showResponseMessage();
    //                                             }                         
        
    //     //membuat get request dan menetapkan target URL
    //     xhr.open("GET", `${baseUrl}/list`);

    //     //mengirim request
    //     xhr.send();

    // };

    //fungsi menggunakan fetch
    // const getBook                           =   ()  =>
    //                                             {
    //                                                 fetch(`${baseUrl}/list`)
    //                                                 .then(response      =>
    //                                                     {
    //                                                         return response.json();
    //                                                     })
    //                                                 .then(responesJson  =>
    //                                                     {
    //                                                         // const responesJson      =   JSON.parse(this.responseText);
    //                                                         if(responesJson.error)
    //                                                         {
    //                                                             showResponseMessage(responesJson.message);
    //                                                         }
    //                                                         else
    //                                                         {
    //                                                             renderAllBooks(responesJson.books);
    //                                                         }
    //                                                     })
    //                                                 .catch(error => 
    //                                                     {
    //                                                         showResponseMessage(error);
    //                                                     })                                                        
    //                                             }

    //fungsi asynchronous promise
    const getBook                           =   async() => 
                                                {
                                                    try
                                                    {
                                                        const response      =   await fetch(`${baseUrl}/list`);
                                                        const responesJson  =   await response.json();

                                                        if(responesJson.error)
                                                        {
                                                            showResponseMessage(responesJson.message);
                                                        }
                                                        else
                                                        {
                                                            renderAllBooks(responesJson.books);
                                                        }
                                                    }
                                                    catch(error)
                                                    {
                                                        showResponseMessage(error);
                                                    }
                                                }                                            
    
    
    // const insertBook = (book) => {
    //     //membuat instance dari XmlHttpRequest
    //     const xhr                           =   new XMLHttpRequest();

    //     xhr.onload                          =   function()
    //                                             {
    //                                                 const responesJson      =   JSON.parse(this.responseText);
    //                                                 showResponseMessage(responesJson.message);
    //                                                 getBook();
    //                                             }
                                                
    //     xhr.onerror                         =   function()
    //                                             {
    //                                                 showResponseMessage();
    //                                             }                         
    
    //     //membuat post request dan menetapkan url target
    //     xhr.open("POST", `${baseUrl}/add`);
        
    //     //menetapkan properti Content-type dan X-Auth-Token pada Header Request
    //     xhr.setRequestHeader("Content-Type","application/json");
    //     xhr.setRequestHeader("X-Auth-Token", 12345);

    //     //mengirimkan request dan menyisipkan JSON.stringify(book) pada body
    //     xhr.send(JSON.stringify(book));
                                                        
    // };

    // //pembuatan fungsi insertBook menggunakan fetch
    // const insertBook                        =   (book) =>
    //                                             {
    //                                                 fetch(`${baseUrl}/add`,
    //                                                 {
    //                                                     method  :   "POST",
    //                                                     headers :   {
    //                                                                     "Content-Type"  :   "application/json",
    //                                                                     "X-Auth-Token"  :   12345
    //                                                                 },
    //                                                     body    :   JSON.stringify(book)                                                                
    //                                                 })
    //                                                 .then(response => 
    //                                                     {
    //                                                         return response.json();
    //                                                     })
    //                                                 .then(responesJson => 
    //                                                     {
    //                                                         showResponseMessage(responesJson.message);
    //                                                         getBook();
    //                                                     })
    //                                                 .catch(error => 
    //                                                     {
    //                                                         showResponseMessage(error);
    //                                                     })
    //                                             }

    //pembuatan fungsi insertBook menggunakan async/await
    const insertBook                        =   async(book) => 
                                                {
                                                    try
                                                    {
                                                        const options       =   
                                                        {
                                                            method  :   "POST",
                                                            headers :   {
                                                                            "Content-Type"  :   "application/json",
                                                                            "X-Auth-Token"  :   12345
                                                                        },
                                                            body    :   JSON.stringify(book)
                                                        }
                                                    const response          =   await fetch(`${baseUrl}/add`,options)
                                                    const responesJson      =   await response.json();
                                                    showResponseMessage(responesJson.message);
                                                    getBook();                                                        
                                                    }
                                                    catch(error)
                                                    {
                                                        showResponseMessage(error);
                                                    }
                                                }

    // const updateBook = (book) => {
    //     //membuat instance dari xmlhttprequest
    //     const xhr                           =   new XMLHttpRequest();

    //     //menetapkan callback jika berhasil dan gagal
    //     xhr.onload                          =   function()
    //                                             {
    //                                                 const responesJson      =   JSON.parse(this.responseText);
    //                                                 showResponseMessage(responesJson.message);
    //                                                 getBook();
    //                                             }

    //     xhr.onerror                         =   function()
    //                                             {
    //                                                 showResponseMessage();
    //                                             }                                                

    //     //membuat put request dan menetapkan target url
    //     xhr.open("PUT", `${baseUrl}/edit/${book.id}`);
        
    //     //menetapkan properti Content-type dan X-Auth-token pada header request
    //     xhr.setRequestHeader("Content-Type", "application/json");
    //     xhr.setRequestHeader("X-Auth-Token", 12345);

    //     //mengirimkan request dan menyisipkan JSON.stringify(book) pada body
    //     xhr.send(JSON.stringify(book));
    // };

    //membuat fungsi updateBook menggunakan fetch
    // const updateBook                    =   (book) => 
    //                                         {
    //                                             fetch(`${baseUrl}/edit/${book.id}`,
    //                                             {
    //                                                 method  :   "PUT",
    //                                                 headers :   {
    //                                                                 "Content-Type"  :   "application/json",
    //                                                                 "X-Auth-Token"  :   12345
    //                                                             },
    //                                                 body    :   JSON.stringify(book)                                                                
    //                                             })
    //                                             .then(response => 
    //                                                 {
    //                                                     return response.json();
    //                                                 })
    //                                             .then(responesJson => 
    //                                                 {
    //                                                     showResponseMessage(responesJson.message);
    //                                                     getBook();
    //                                                 })
    //                                             .catch(error => 
    //                                                 {
    //                                                     showResponseMessage(error);
    //                                                 })
                                                
    //                                         }

    //membuat fungsi updateBook menggunakan async/await
    const updateBook                        =   async(book) =>
                                                {
                                                    try
                                                    {
                                                        const options       =   {
                                                                                    method  :   "PUT",
                                                                                    headers :   {
                                                                                                    "Content-Type"  :   "application/json",
                                                                                                    "X-Auth-Token"  :   12345
                                                                                                },
                                                                                    body    :   JSON.stringify(book)
                                                                                }
                                                        const response      =   await fetch(`${baseUrl}/edit/${book.id}`,options);
                                                        const responesJson  =   await response.json();
                                                        
                                                        showResponseMessage(responesJson.message);

                                                        getBook();
                                                    }
                                                    catch(error)
                                                    {
                                                        showResponseMessage(error);
                                                    }
                                                }

    // const removeBook = (bookId) => {
    //     //membuat instance dari xmlhttprequest
    //     const xhr                           =   new XMLHttpRequest();

    //     //menetapkan callback jika berhasil dan error
    //     xhr.onload                          =   function()
    //                                             {
    //                                                 const responesJson          =   JSON.parse(this.responseText);
    //                                                 showResponseMessage(responesJson.message);
    //                                                 getBook();
    //                                             }
    //     xhr.onerror                         =   function()
    //                                             {
    //                                                 showResponseMessage();
    //                                             }                         
        
    //     //membuat delete request dan menetapkan  target url
    //     xhr.open("DELETE", `${baseUrl}/delete/${bookId}`);
        
    //     //menetapkan properti Content-type dan X-Auth-Token
    //     xhr.setRequestHeader("X-Auth-Token", 12345);

    //     //mengirimkan request
    //     xhr.send();

                                                


    // };

    //membuat fungsi removeBook dengan fetch
    const removeBook                    =   (bookId) =>
                                            {
                                                fetch(`${baseUrl}/delete/${bookId}`, 
                                                {
                                                    method  :   "DELETE",
                                                    headers :   {
                                                                    "X-Auth-Token"  :   12345
                                                                }                                                                
                                                })
                                                .then(response => 
                                                    {
                                                        return response.json();
                                                    })
                                                .then(responesJson => 
                                                    {
                                                        showResponseMessage(responesJson.message);
                                                        getBook();
                                                    })
                                                .catch(error => 
                                                    {
                                                        showResponseMessage(error)
                                                    })
                                            }




    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllBooks = (books) => {
        const listBookElement = document.querySelector("#listBook");
        listBookElement.innerHTML = "";

        books.forEach(book => {
            listBookElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <h5>(${book.id}) ${book.title}</h5>
                            <p>${book.author}</p>
                            <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
                        </div>
                    </div>
                </div>
            `;
        });

        const buttons = document.querySelectorAll(".button-delete");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const bookId = event.target.id;
                removeBook(bookId);
            })
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {

        const inputBookId = document.querySelector("#inputBookId");
        const inputBookTitle = document.querySelector("#inputBookTitle");
        const inputBookAuthor = document.querySelector("#inputBookAuthor");
        const buttonSave = document.querySelector("#buttonSave");
        const buttonUpdate = document.querySelector("#buttonUpdate");

        buttonSave.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };
            insertBook(book)
        });

        buttonUpdate.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };

            updateBook(book)
        });
        getBook();
    });
}

export default main;