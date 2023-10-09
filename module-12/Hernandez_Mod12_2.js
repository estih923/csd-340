


const books = [
    "How to Win Friends and Influence People by Dale Carnegie",
    "The 7 Habits of Highly Effective People by Franklin Covey",
    "The Lord of the Rings by J.R.R Tolkien",
    "Dare to Lead: Brave Work. Tough Conversations. Whole Hearts. By Brene Brown",
    "The Road Back to You: An Enneagram Journey to Self-Discovery by Ian Morgan Cron",
    "Harry Potter by J.K. Rowling",
    "High Output Management by Andy Grove",
    "Work Rules!: Insights From Inside Google That Will Transform How You Live and Lead by Laszlo Bock",
    "The Innovator’s Dilemma: When New Technologies Cause Great Firms to Fail (Management of Innovation and Change) by Clayton M. Christensen",
    "The Intelligent Investor: The Definitive Book on Value Investing. A Book of Practical Counsel By Benjamin Graham"
];


function sortBooks(order) {
    const bookList = document.getElementById("book-list");
    
    bookList.innerHTML = '';

    
    const sortedBooks = order === 'asc' ? books.slice().sort() : books.slice().sort().reverse();

    
    sortedBooks.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = book;
        bookList.appendChild(listItem);
    });
}
