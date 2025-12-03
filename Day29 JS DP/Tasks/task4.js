class ConfigureVals {
    constructor(xpoint = 0, ypoint = 0, shape = null) {
        if (ConfigureVals.instance) {
            return ConfigureVals.instance;
        }

        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.shape = shape;

        ConfigureVals.instance = this;
    }

  setConfiguration(x = 0, y = 0, s = null) {
    this.xpoint = x;
    this.ypoint = y;
    this.shape = s;
    }

    getConfiguration() {
        return this;
    }
}


let config1 = new ConfigureVals()
config1.setConfiguration(5, 10, "circle");

console.log(config1.getConfiguration());


let config2 = new ConfigureVals()
config2.setConfiguration(100, 200, "square");

console.log(config2.getConfiguration());

console.log(config1 === config2);
