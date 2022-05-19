const Laptop = class {
    constructor(owner, brand, size, color)
    {
        this.owner = owner,
        this.brand = brand,
        this.size = size,
        this.color = color
    }
    changeColor(newColor)
    {
        this.color = newColor;
    }
    changeOwner(newOwner)
    {
        this.owner = newOwner;
    }
};

export default Laptop;