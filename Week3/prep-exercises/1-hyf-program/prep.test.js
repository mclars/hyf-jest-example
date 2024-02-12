
import { possibleMentorsForModule } from "./1-find-mentors";

// https://techkluster.com/node/jest-and-esm/
// https://jestjs.io/docs/ecmascript-modules

const realExistigModule = 'using-apis'

describe('class-list e')

describe('Prep Exersices tests', () => {

    test('Canary test - jest runs correctly', () => {
        expect(true).toBe(true);
    })

    test('2. Lets write a test', () => {
        // const expected = ['John', 'Mary']
        const result = possibleMentorsForModule(realExistigModule);
        expect(typeof result.length).toBe("number")
    })

    test('should have a string in first element', () => {
        const result = possibleMentorsForModule(realExistigModule);
        expect(typeof result[0]).toBe('string')
    })

    test('Should return existing tutor name for valid module', () => {
        const expected = 'Shriyans'
        const result = possibleMentorsForModule('react')
        expect(result[0]).toBe(expected)
    })

    test('Should throw an error if there is no module name', () => {
        expect(() => {
            possibleMentorsForModule()
        }).toThrow()
    })

    test('Should throw an error if there is no module name', () => {
        expect(() => {
            possibleMentorsForModule(undefined)
        }).toThrow()
    })

    test('Should throw an error if empty string', () => {
        expect(() => {
            possibleMentorsForModule('')
        }).toThrow()
    })

    test('Should throw an error if module is null', () => {
        expect(() => {
            possibleMentorsForModule(null)
        }).toThrow()
    })

    // test('Should throw an error if module does not exist', () => {
    //     const moduleThatIsNotReal = 'bake-cookies.js'
    //     expect(() => {
    //         possibleMentorsForModule(moduleThatIsNotReal)
    //     }).toThrow()
    // })

    test('re assign a const works', () => {
        const something = 'lars'
        const closure = () => {
            // access something
            const another = '=x'
            const nested = () => {
                // adsd

            }
        }
    })
})
