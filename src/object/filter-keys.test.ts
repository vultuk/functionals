import { filterKeys } from './filter-keys';

test("Object -> Filter Keys", () => {
    const singleObject = {
        itemOne: "Item One",
        itemTwo: "Item Two",
        itemThree: 3,
        itemFour: true,
        itemFive: {
            subItem1: "Sub 1",
            subItem2: "Sub 2",
            subItem3: 3,
            subItem4: false,
        }
    };

    const firstFilter = filterKeys(["itemOne", "itemTwo", "itemFour"]);
    expect(firstFilter(singleObject)).toEqual({
        itemOne: "Item One",
        itemTwo: "Item Two",
        itemFour: true,
    });

    const subFilter = filterKeys(['itemFour', 'itemFive']);
    expect(subFilter(singleObject)).toEqual({
        itemFour: true,
        itemFive: {
            subItem1: "Sub 1",
            subItem2: "Sub 2",
            subItem3: 3,
            subItem4: false,
        }
    });
});