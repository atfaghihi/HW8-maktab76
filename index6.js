let site = {
    siteName: "W3Docs",
    bookName: "Javascript",
    get fullName() {
        return `${this.siteName} ${this.bookName}`;
    },

    set fullName(value){
        [this.siteName, this.bookName] = value.split(' ');
    },
};
console.log(site.fullName);

site.fullName = "W3 CSS";

console.log(site.siteName);
console.log(site.bookName);

function Site(siteName, bookName) {
    this._siteName = siteName;
    this._bookName = bookName;

    Object.defineProperty(this, "fullName", {
        set: function (value) {
            [this._siteName, this._bookName] = value.split(" ");
        },
        get: function () {
            return `${this._siteName} ${this._bookName}`;
        },
    });
}

let sites = new Site('atefeh', 'faghihi');

console.log(sites.fullName);


