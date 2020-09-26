import { add } from './add';

test("Mathematics / Add", () => {
    const incrementByOne = add(1);
    expect(incrementByOne(19)).toBe(20);
    expect(incrementByOne(0)).toBe(1);
    expect(incrementByOne(-33)).toBe(-32);

    const addFive = add(5);
    expect(addFive(10)).toBe(15);
    expect(addFive(0)).toBe(5);
    expect(addFive(-21)).toBe(-16);
})