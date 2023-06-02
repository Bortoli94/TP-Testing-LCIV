import { mayorDeEdad } from "../Functions/FunctionAge"; 

describe('Function mayorDeEdad in FunctionAge.js', ()=>{
    describe('mayorDeEdad', ()=>{
        test('must return true if age is greater than or equal to 18', () =>{
            expect(mayorDeEdad(18)).toBe(true);
            expect(mayorDeEdad(25)).toBe(true);
            expect(mayorDeEdad(30)).toBe(true);
        })
        test('must return false if age is less than 18', () =>{
            expect(mayorDeEdad(15)).toBe(false);
            expect(mayorDeEdad(10)).toBe(false);
            expect(mayorDeEdad(0)).toBe(false);
        })
        test('must return null if a negative number is entered.', () =>{
            expect(mayorDeEdad(-1)).toBe(null);
            expect(mayorDeEdad(-10)).toBe(null);
            expect(mayorDeEdad(-15)).toBe(null);
        })

    })
})