import { Component } from "@angular/core";
import {Http} from "@angular/http";

export class User {
    name: string;
    password: string;
}

@Component({
    selector: "auth",
    styles: [require("./login.styles.scss")],
    template: require("./login.template.html")
})


export class LoginComponent {
    private user = new User();

    constructor(private http: Http) {
    }

    private logIn() {
       this.http.post('https://likeittrello.herokuapp.com/rest/login', JSON.stringify(this.user))
            .map((res) => {JSON.parse(res.text())})
            .subscribe(
                (res) => {},
                err => console.error(err)
            );
    }
}