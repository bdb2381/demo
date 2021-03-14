import { expect } from 'chai'
import {getBorderStyleForDate} from '../todos/ToDoListItem'

describe("The ToDoListItem styled component getBorderStyleForDate:", () => {
  it("Returns empty string when date is less then 5 days ago", () => {
    const today = Date.now()
    const recentDate = new Date(Date.now() - 86400000 * 3) // 3 days
    
    const expected = 'none'
    const actual = getBorderStyleForDate(recentDate, today)
    
    expect(actual).to.equal(expected)
    
    
  }) 
  
  it("Returns a border if date is more then 5 days ago", () => {
    
  })
  
  
  
} )
