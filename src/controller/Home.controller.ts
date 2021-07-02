/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 22:41:47
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-07-03 02:44:48
 */
import { Controller, Get } from '@nestjs/common';
import { List } from 'linqts';
import * as jslinq from 'jslinq';

@Controller()
export class HomeController {
  @Get('/')
  async home() {
    return 'Hello Nestjs!';
  }

  @Get('/linq')
  async linq() {
    const result = new List<number>([1, 2, 3, 4, 5])
      .Where((x) => x > 3)
      .Select((y) => y * 2)
      .OrderByDescending((x) => x)
      .ToArray(); // > [8, 10]

    // const data = [
    //   {
    //     id: 1,
    //     name: 'one',
    //     category: 'fruits',
    //     countries: ['Italy', 'Austria']
    //   },
    //   {
    //     id: 2,
    //     name: 'two',
    //     category: 'vegetables',
    //     countries: ['Italy', 'Germany']
    //   },
    //   { id: 2, name: 'three', category: 'vegetables', countries: ['Germany'] },
    //   { id: 2, name: 'ta', category: 'vegetables', countries: ['Germany'] },
    //   { id: 4, name: 'four', category: 'fruits', countries: ['Japan'] },
    //   { id: 5, name: 'five', category: 'fruits', countries: ['Japan', 'Italy'] }
    // ];

    // const queryObj = jslinq(data);
    // const result = jslinq(data).orderBy((x) => x.id);

    // const result = queryObj.singleOrDefault(function (el) {
    //   return el.name == 'one';
    // });

    return result;
  }

  @Get('/linqThenBy')
  async linqThenBy() {
    const persons = [
      { ID: 0, Age: 30, Name: "A" },
      { ID: 1, Age: 25, Name: "B" },
      { ID: 2, Age: 18, Name: "C" },
      { ID: 1, Age: 30, Name: "D" },
      { ID: 1, Age: 25, Name: "E" },
      { ID: 2, Age: 15, Name: "F" }
    ]
    const persons2 = [
      { ID: 0, Age: 30, Name: "A" },
      { ID: 1, Age: 25, Name: "B" },
      { ID: 2, Age: 18, Name: "C" },
      { ID: 1, Age: 30, Name: "D" },
      { ID: 1, Age: 25, Name: "E" },
      { ID: 2, Age: 15, Name: "F" }
    ]
    const persons3 = [
      { ID: 0, Age: 30, Name: "A" },
      { ID: 1, Age: 25, Name: "B" },
      { ID: 2, Age: 18, Name: "C" },
      { ID: 1, Age: 30, Name: "D" },
      { ID: 1, Age: 25, Name: "E" },
      { ID: 2, Age: 15, Name: "F" }
    ]
    const orderByID  = new List<any>(persons).OrderBy( (value) => value.ID ).ToArray()
    const thenByAge  = new List<any>(persons2).OrderBy( (value) => value.ID ).ThenBy( (value) => value.Age ).ToArray()
    const thenByName = new List<any>(persons3).OrderBy( (value) => value.ID ).ThenBy( (value) => value.Age ).ThenByDescending( (value) => value.Name ).ToArray()

    console.log('orderByID:', orderByID)
    console.log('thenByAge:', thenByAge)
    console.log('thenByName:', thenByName)

    return {orderByID, thenByAge, thenByName }
  }

  @Get('/linqSelectMany')
  async linqSelectMany() {
    const parameters = [
      { Name: "正一郎", Numbers: [ 1, 2, 3 ] },
      { Name: "清次郎", Numbers: [ 1, 3, 5 ] },
      { Name: "誠三郎", Numbers: [ 2, 4, 6 ] },
      { Name: "征史郎", Numbers: [ 9, 8, 7 ] }
    ]

    const results = new List<any>(parameters).SelectMany((value) => value.Numbers).ToArray()

    return results;
  }

  @Get('/linqSelect')
  async linqSelect() {
    const parameters = [
      { ID: 5, Rate: 0.0, Name: "正一郎" },
      { ID: 13, Rate: 0.1, Name: "清次郎" },
      { ID: 25, Rate: 0.0, Name: "誠三郎" },
      { ID: 42, Rate: 0.3, Name: "征史郎" }
    ]

    const parameters2 = [
      { ID: 5, Rate: 0.0, Name: "正一郎" },
      { ID: 13, Rate: 0.1, Name: "清次郎" },
      { ID: 25, Rate: 0.0, Name: "誠三郎" },
      { ID: 42, Rate: 0.3, Name: "征史郎" }
    ]

    const results = new List<any>(parameters).Select((value) =>  { return { ID: value.ID, Name: value.Name}; } ).ToArray()

    const results2 = jslinq(parameters).select((value) =>  { return { ID: value.ID, Name: value.Name + 1 }; } ).toList()

    return results2;
  }
}
