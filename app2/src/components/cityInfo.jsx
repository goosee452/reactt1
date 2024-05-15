export class City{
    name;
    country;
    imgSrc;

    constructor(){
        this.name = '';
        this.country = '';
        this.imgSrc = new Array();
        this.render = this.render.bind(this);
    }

    setInfo(name, country){
        this.name = name;
        this.country= country;
    }

    setSrc(...src){
        for(let i = 0; i < src.length; i++){
            this.imgSrc.push(src[i] + '');
        }
        this.imgSrc.flat(Infinity);
    }

    render(){
        let images = new Array();
        for(let i = 0; i < this.imgSrc.length; i++){
            images.push(<img src={this.imgSrc[i]} height='400px' width={'400px'} key={'' + i}></img>)
        }
        let result = <>
            <div>Name: {this.name}</div>;
            <div>Country: {this.country}</div>
            <div>
                {images}
            </div>
        </>;
        return result;
    }
}