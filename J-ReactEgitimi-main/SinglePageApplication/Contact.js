function getContactPage(){
    root.innerHTML = `
    <h1>Contact</h1>
    <form>
        Email
        <input type="email">
        <br>
        Subject
        <input type="text">
        <br>
        Content
        <textarea cols="30" rows="10"></textarea>
        <br>
        <button>Send</button>
    </form>            
    `
}