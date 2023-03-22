// const num1: number = 20;
// const userName: string = "aung aung";
// const isOK: boolean = true;

// const test = (): number => {
//   return num1;
// };

// const testFunction = (num2: number, num3: number): number => {
//   return num2 * num3;
// };
// testFunction(2, 5);

// // Interface ( typescript object)

// interface people {
//   ball: number;
//   gym: number;
// }
// const testObject = (user: people): number => {
//   return user.ball * user.gym;
// };

// console.log(testObject({ ball: 12, gym: 20 }));

// // object Destructuring
// interface Shop {
//   coffee: number;
//   tea: number;
// }
// const testShop = ({ coffee, tea }: Shop): number => {
//   return coffee * tea;
// };

// console.log(testShop({ coffee: 5, tea: 7 }));

// // optional ( ? )
// interface Props {
//   num2: number;
//   num3?: number;
// }
// const teatOption = ({ num2, num3 }: Props): number => {
//   if (num3) {
//     return num2 * num1;
//   }
//   return num2;
// };

// console.log(teatOption,({ num2: 2 }));
//
// Use object as parameter

interface Props {
  num4: number;
  num5?: number;
  user: { name: string; email: string; man: number };
}
const ObjectAsPara = ({num4,num5,user}:Props):number => {
    if (num5) {
        return num4 * num5;
      }
      console.log(user.email);
      
      return num4;
}
ObjectAsPara({
    num4 : 2,
    user: {name:"Aung",email: "aung@gmail.com",man:45}
})