Given a predetermined rate from an object, write the function that will return the time it takes for a certain amount of people to paint a certain amount of walls. Return the minutes as an integer. No rounding is necessary.

### Solution
```js

//Rate = number of walls painted per minute 
//divided by people

function time(obj, people, walls) {
	let rate = (obj.minutes/obj.walls)*obj.people
	return (rate*walls)/people
}

```

