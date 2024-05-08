export class City{
    name;
    country;
    imgSrc;

    constructor(){
        this.name = '';
        this.country = '';
        this.imgSrc = new Array();
    }

    setInfo(name, country){
        this.name = name;
        this.country= country;
    }

    setSrc(...src){
        this.imgSrc.push(src);
        this.imgSrc.flat(Infinity);
    }

    render(){
        return <>
            <div>Name: {this.name}</div>
            <div>Country: {this.country}</div>
        </>
    }
}