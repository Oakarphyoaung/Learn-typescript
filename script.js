// const num1: number = 20;
// const userName: string = "aung aung";
// const isOK: boolean = true;
var ObjectAsPara = function (_a) {
    var num4 = _a.num4, num5 = _a.num5, user = _a.user;
    if (num5) {
        return num4 * num5;
    }
    console.log(user.email);
    return num4;
};
ObjectAsPara({
    num4: 2,
    user: { name: "Aung", email: "aung@gmail.com", man: 45 }
});
