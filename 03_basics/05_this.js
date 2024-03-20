// this

const user = {
    username: "suraj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);  // this, it shows the current context of overall program
    }
}

user.welcomeMessage()

user.username = "frost"  // username is changed because value is hardcode
user.welcomeMessage()

console.log(this);  // output - {}

function nothing() {
    let username = "surajkumar"
    console.log(this.username);  // output = undefined
}

nothing()
// this, it works in context but not is function directly

