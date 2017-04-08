import { Component } from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

export class User {
    name: string;
    password: string;
}

@Component({
    selector: "login",
    styles: [require("./login.styles.scss")],
    template: require("./login.template.html")
})


export class LoginComponent {
    private user = new User();

    constructor(private http: Http, private router: Router) {
        this.router = router;
    }

    private isValid(field) {
        return field;
    }

    private logIn() {
        this.router.navigate(['/habs']);
       // this.http.post('https://likeitt-risingapp.herokuapp.com/rest/chat-list', JSON.stringify(this.user))
       //      .map((res) => {JSON.parse(res.text())})
       //      .subscribe(
       //          (res) => {},
       //          err => console.error(err)
       //      );
    }
}