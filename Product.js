class Product {
    constructor(name,price,desc,img) {
        this.id = 0;
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.img = img;
    }

    setId(id){
        this.id = id;
    }
    getId(id){
        return this.id;
    }

    edit(id){

    }

    getHtml(){
        let str = `<tr>
                        <td>${this.id}</td>
                        <td>${this.name}</td>
                        <td>${this.price}</td>
                        <td>${this.desc}</td>
                        <td>${this.img}</td>
                   </tr>`;
        return str;
    }
}
