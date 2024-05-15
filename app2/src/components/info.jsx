export class Info{
    name;
    phone;
    email;

    constructor(){
        this.name = '-';
        this.phone = '-';
        this.email = '-';
        this.render = this.render.bind(this);
    }

    setAll(name, phone, email){
        this.name = name;
        this.email = email;
        this.phone = phone;
        console.log(this);
    }

    render(){
        return <div>
            <div>Name: {this.name}</div>
            <div>Phone: {this.phone}</div>
            <div>Email: {this.email}</div>
        </div>
    }
}